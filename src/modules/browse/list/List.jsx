import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ListItem from './ListItem';
import styles from './list.scss';

class List extends Component {
    static propTypes = {
        announcements: PropTypes.array,
        handleSelectAnnouncement: PropTypes.func
    }

    render() {
        const { announcements, handleSelectAnnouncement } = this.props;

        return (
            <Card className={styles.card}>
                <ul className={styles.list}>
                    {
                        announcements.map((announcement, index) => 
                            <ListItem
                                key={announcement.id}
                                id={announcement.id}
                                title={announcement.title}
                                content={announcement.content}
                                info={announcement.info}
                                handleSelectAnnouncement={handleSelectAnnouncement}/>
                        )
                    }
                </ul>
            </Card>
        )
    }
}

export default List;