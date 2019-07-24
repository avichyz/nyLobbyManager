import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import loading from '../../../assets/loading.gif';
import styles from './listItem.scss';
import png64bitIcon from '../../../png64bitIcon';

class ListItem extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string
    };
    
    handleSelectAnnouncement = () => {
        const { handleSelectAnnouncement, id } = this.props;
        handleSelectAnnouncement(id);
    }

    render() {
        const { title, content } = this.props;
        const { handleSelectAnnouncement } = this;

        return (
            <Fragment>
                <div
                    className={styles.itemContainer}
                    onClick={handleSelectAnnouncement}>
                    <img
                        className={styles.img}
                        src={png64bitIcon}
                        alt={loading}>
                    </img>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            {`${title}`}
                        </div>
                        <div className={styles.batteryPercentage}>
                            {`${content}`}
                        </div>
                    </div>
                </div>
                <hr></hr>
            </Fragment>
        )
    }
}

export default ListItem;