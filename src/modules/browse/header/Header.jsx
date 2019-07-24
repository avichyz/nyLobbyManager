import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './header.scss';


class Header extends Component {
    static proptypes = {
        announcementsCount: PropTypes.number
    }

    render() {

        const {announcementsCount} = this.props;

        return (
            <div className={styles.headerContainer}>  
                <div className={styles.title}>
                    הודעות הוועד
                </div>
                <Button color="primary"
                    onClick={this.props.onAdd}
                    className={styles.button}>
                    הוסף
                </Button>
            </div>
        )
    }
}

export default Header;