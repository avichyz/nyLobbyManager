import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ListItem from './ListItem';
import styles from './list.scss';

class List extends Component {
    static propTypes = {
        carts: PropTypes.array,
        handleSelectCart: PropTypes.func
    }

    render() {
        const { carts, handleSelectCart } = this.props;

        return (
            <Card className={styles.card}>
                <ul className={styles.list}>
                    {
                        carts.map((cart, index) => 
                            <ListItem
                                key={cart.id}
                                id={cart.id}
                                cartId={cart.cartId}
                                batteryPercentage={cart.batteryPercentage}
                                longitude={cart.longitude}
                                latitude={cart.latitude}
                                info={cart.info}
                                handleSelectCart={handleSelectCart}/>
                        )
                    }
                </ul>
            </Card>
        )
    }
}

export default List;