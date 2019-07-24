import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { selectAnnouncement, loadAnnouncementsWithData } from '../../redux/actions'
import Browse from './Browse';
import CreateContainer from '../createOrEdit/CreateContainer';


class BrowseContainer extends Component {

    state = ({ addDialogOpened: false });

    handleOpen = () => {
        this.setState({ addDialogOpened: true });
    }

    handleClose = () => {
        this.setState({ addDialogOpened: false });
    }

    handleSelectAnnouncement = (id) => {
        this.props.onSelectAnnouncement(id);
    }

    componentDidMount() {
        this.props.loadAnnouncements();
    }

    render() {
        const { selectedId, announcements } = this.props;

        return (
            <Fragment>
                {
                    !this.state.addDialogOpened &&
                    <Browse
                        announcements={announcements}
                        selectedId={selectedId}
                        handleSelectAnnouncement={this.handleSelectAnnouncement}
                        handleOpenDialog={this.handleOpen}
                        handleCloseDialog={this.handleClose} />
                }
                {
                    this.state.addDialogOpened &&
                    <CreateContainer handleCloseDialog={this.handleClose} />

                }
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    announcements: (state.announcements || []),
    selectedId: state.selectedId
})

const mapDispatchToProps = dispatch => ({
    onSelectAnnouncement: id => dispatch(selectAnnouncement(id)),
    loadAnnouncements: () => dispatch(loadAnnouncementsWithData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseContainer)
