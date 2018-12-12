import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import List from './list/List';
import ItemDisplayContainer from './itemDispaly/ItemDisplayContainer'
import Card from '@material-ui/core/Card';
import styles from './browse.scss';


class Browse extends Component {
    static defaultProps = {
        carts: []
    }

    static propTypes = {
        carts: PropTypes.array,
        selectedId: PropTypes.string,
        selectedcartId: PropTypes.string,
        selectedbatteryPercentage: PropTypes.string,
        handleSelectCart: PropTypes.func
    }

    render() {
        const {
            carts,
            handleSelectCart,
            handleOpenDialog,
            handleCloseDialog,
            selectedId } = this.props;

        return (
            <Card className={styles.root}>
                <Header
                    cartsCount={carts.length}
                    onAdd={handleOpenDialog}
                    onClose={handleCloseDialog} />
                <div className={styles.listAndItemDisplay}>
                    {
                        selectedId &&
                        <ItemDisplayContainer
                            id={selectedId} />
                    }
                    <List
                        carts={carts}
                        handleSelectCart={handleSelectCart} />
                </div>
            </Card>
        )
    }
}

export default Browse;