import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemDisplay from './ItemDisplay';
import { deleteAnnouncement as deleteAnnouncementRedux } from '../../../redux/actions';
import { deleteAnnouncement } from '../../../managers/announcementServiceManager'
import { connect } from 'react-redux'

class ItemDisplayContainer extends Component {

    state = {
        title: null,
        content: null,
        info: null
    }

    static proptypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        info: PropTypes.string
    }

    loadData = (id) => {
        const announcement = this.props.announcements.find(item=> item.id == id);
        this.setState({ 
            title: announcement.title, 
            content: announcement.content, 
            info: announcement.info
        });
    }

    handleDelete = (id) => {
        deleteAnnouncement(id).then(() => {
            this.props.deleteAnnouncement(id);
        })
    }

    componentDidMount() {
        if (this.props.id) {
            this.loadData(this.props.id);
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.id !== prevProps.id) || (this.props.announcements !== prevProps.announcements))  {
            this.loadData(this.props.id);
        }
    }

    render() {
        const { id } = this.props;
        const { title, content, info } = this.state;
        
        return (
           <ItemDisplay 
                id={id}
                title={title}
                info={info}
                content={content}
                onDelete={this.handleDelete}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteAnnouncement: (id) => dispatch(deleteAnnouncementRedux(id))
})

const mapStateToProps = state => ({
    announcements: state.announcements
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDisplayContainer)

