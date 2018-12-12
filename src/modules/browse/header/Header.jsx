import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './header.scss';


class Header extends Component {
    static proptypes = {
        cartsCount: PropTypes.number
    }

    render() {

        const {cartsCount} = this.props;

        return (
            <div className={styles.headerContainer}>  
                <div className={styles.cartId}>
                    Browse our carts 
                </div>
                <Button color="primary"
                    onClick={this.props.onAdd}
                    className={styles.button}>
                    Add
                </Button>
            </div>
        )
    }
}

export default Header;