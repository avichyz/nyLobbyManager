import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import List from './list/List';
import ItemDisplayContainer from './itemDispaly/ItemDisplayContainer'
import Card from '@material-ui/core/Card';
import styles from './browse.scss';


class Browse extends Component {
    static defaultProps = {
        announcements: []
    }

    static propTypes = {
        announcements: PropTypes.array,
        selectedId: PropTypes.string,
        handleSelectAnnouncement: PropTypes.func
    }

    render() {
        const {
            announcements,
            handleSelectAnnouncement,
            handleOpenDialog,
            handleCloseDialog,
            selectedId } = this.props;

        return (
            <Card className={styles.root}>
                <Header
                    announcementsCount={announcements.length}
                    onAdd={handleOpenDialog}
                    onClose={handleCloseDialog} />
                <div className={styles.listAndItemDisplay}>
                    {
                        selectedId &&
                        <ItemDisplayContainer
                            id={selectedId} />
                    }
                    <List
                        announcements={announcements}
                        handleSelectAnnouncement={handleSelectAnnouncement} />
                </div>
            </Card>
        )
    }
}

export default Browse;