import React from 'react';
import { connect } from 'react-redux'
import { editAnnouncement } from '../../redux/actions';
import { updateAnnouncement } from '../../managers/announcementServiceManager';
import CreateOrEdit from './CreateOrEdit';

class EditContainer extends React.Component {

    state = {
        id: null,
        title: null,
        content: null,
        info: null,
    }

    loadData = (title) => {
        const announcement = this.props.announcements.find(mov => mov.id == title);
        this.setState({ ...announcement })
    }

    
    handleSaveChanges = ({title, content, info, id}) => {
        async function updateAndWaitForIt(reduxUpdateFunction) {
            const announcement = await updateAnnouncement({ title, content, info, id }, id)

            reduxUpdateFunction(
                announcement.title, 
                announcement.content, 
                announcement.info, 
                id);
        }

        updateAndWaitForIt(this.props.editExistedAnnouncement)
    }

    componentDidMount() {
        if(this.props.id) {
            this.loadData(this.props.id);
        }
    }
    render() {
        return (
            <CreateOrEdit
                announcement={this.state}
                handleSave={this.handleSaveChanges}
                handleCloseDialog={this.props.handleCloseDialog}
            />
        );
    }
}

const mapStateToProps = state => ({
    announcements: state.announcements
})

const mapDispatchToProps = dispatch => ({
    editExistedAnnouncement: (title, content,info, id) =>
        dispatch(editAnnouncement(id,title, content, info))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditContainer)
