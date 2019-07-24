import React from 'react';
import { connect } from 'react-redux'
import { addAnnouncement } from '../../redux/actions';
import { saveNewAnnouncement } from '../../managers/announcementServiceManager'
import CreateOrEdit from './CreateOrEdit';
import styles from './createOrEdit.scss';
import { MuiThemeProvider } from '@material-ui/core';

class CreateContainer extends React.Component {

    handleSaveNewAnnouncement = (title, content, info, isHidden) => {
        async function saveAndWaitForIt(reduxSaveFunction) {
            const announcement = await saveNewAnnouncement({ title, content, info, isHidden });
            reduxSaveFunction(title, content, info, isHidden);
        }

        saveAndWaitForIt(this.props.saveNewAnnouncement)
        this.props.handleCloseDialog();
    }

    render() {
        return (
            <CreateOrEdit
                className={styles.width100}
                handleSave={this.handleSaveNewAnnouncement}
                handleCloseDialog={this.props.handleCloseDialog}
            />
        );
    }
}

const mapStateToProps = state => ({
    announcements: state.announcements
})


const mapDispatchToProps = dispatch => ({
    saveNewAnnouncement: (title, content, info) =>
        dispatch(addAnnouncement(title, content, info))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer)
