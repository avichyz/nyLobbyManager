import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import loading from '../../../assets/loading.gif';
import styles from './listItem.scss';

class ListItem extends Component {

    static propTypes = {
        id: PropTypes.string,
        cartId: PropTypes.string,
        batteryPercentage: PropTypes.number
    };
    
    handleSelectCart = () => {
        const { handleSelectCart, id } = this.props;
        handleSelectCart(id);
    }

    render() {
        const { cartId, batteryPercentage, latitude, longitude } = this.props;
        const { handleSelectCart } = this;

        return (
            <Fragment>
                <div
                    className={styles.itemContainer}
                    onClick={handleSelectCart}>
                    <img
                        className={styles.img}
                        src="data:image/png;base64,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"
                        alt={loading}>
                    </img>
                    <div className={styles.textContainer}>
                        <div className={styles.cartId}>
                            {`cartId: ${cartId}`}
                        </div>
                        <div className={styles.latitude}>
                            {`(lat:${latitude}, long:${longitude})`}
                        </div>
                        <div className={styles.batteryPercentage}>
                            {`batteryPercentage: ${batteryPercentage}%`}
                        </div>
                    </div>
                </div>
                <hr></hr>
            </Fragment>
        )
    }
}

export default ListItem;