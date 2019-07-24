import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EditContainer from '../../createOrEdit/EditContainer';
import DeletePrompt from './DeletePrompt';
import Modal from '@material-ui/core/Modal';
import png64bitIcon from '../../../png64bitIcon';
import styles from './itemDisplay.scss';

class ItemDisplay extends Component {

    static proptypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        info: PropTypes.string,
        isHidden: PropTypes.bool
    }

    state = {
        editOpened: false,
        deleteOpened: false
    }

    handleClose = () => {
        this.setState({ editOpened: false })
    }

    onOpen = () => {
        this.setState({ editOpened: true })
    }

    openDeleteDialog = () => {
        this.setState({ deleteOpened: true })
    }

    closeDeleteDialog = () => {
        this.setState({ deleteOpened: false })
    }


    render() {

        const { id, content, title, info, isHidden } = this.props;
        return (
            <div className={styles.container}>
                {
                    <Fragment>
                        <img
                            className={styles.img}
                            src={png64bitIcon}
                            alt="">
                        </img>
                        <div className={styles.details}>
                            <div className={styles.title}>
                                {`${title}`}
                            </div>
                            <div className={styles.info}>
                                {`תוכן:`}
                                <br/>
                                {`${content}`}
                            </div>
                        </div>
                    </Fragment>
                }
                <div className={styles.buttons}>
                    <Button color="primary"
                        onClick={this.openDeleteDialog}
                        className={styles.button}>
                        מחק
                    </Button>
                    <Button color="primary"
                        onClick={this.onOpen}
                        className={styles.button}>
                        ערוך
                    </Button>
                </div>

                <DeletePrompt
                    open={this.state.deleteOpened}
                    onClose={this.closeDeleteDialog}
                    onDelete={this.props.onDelete}
                    id={id} />

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.editOpened}
                    onClose={this.handleClose}>
                    <EditContainer
                        handleCloseDialog={this.handleClose}
                        id={id} />
                </Modal>
            </div>
        )
    }
}

export default ItemDisplay;