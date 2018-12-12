import React from 'react';
import { connect } from 'react-redux'
import { addCart } from '../../redux/actions';
import { saveNewCart } from '../../managers/cartsServiceManager'
import CreateOrEdit from './CreateOrEdit';
import styles from './createOrEdit.scss';
import { MuiThemeProvider } from '@material-ui/core';

class CreateContainer extends React.Component {

    handleSaveNewCart = (cartId, batteryPercentage, latitude, longitude, info) => {
        if (this.props.carts.find(mov => mov.cartId === cartId))
            throw "CartId already exists!";

        async function saveAndWaitForIt(reduxSaveFunction) {
            const cart = await saveNewCart({ cartId, batteryPercentage, latitude, longitude, info })

            reduxSaveFunction(
                cart.cartId,
                cart.batteryPercentage,
                cart.latitude,
                cart.longitude,
                cart.info);
        }

        saveAndWaitForIt(this.props.saveNewCart)
        this.props.handleCloseDialog();
    }

    render() {
        return (
            <CreateOrEdit
                className={styles.width100}
                handleSave={this.handleSaveNewCart}
                handleCloseDialog={this.props.handleCloseDialog}
            />
        );
    }
}

const mapStateToProps = state => ({
    carts: state.carts
})


const mapDispatchToProps = dispatch => ({
    saveNewCart: (cartId, batteryPercentage, latitude, longitude, info) =>
        dispatch(addCart(cartId, latitude, batteryPercentage, info, longitude))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer)
