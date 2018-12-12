import React from 'react';
import { connect } from 'react-redux'
import { editCart } from '../../redux/actions';
import { updateCart } from '../../managers/cartsServiceManager';
import CreateOrEdit from './CreateOrEdit';

class EditContainer extends React.Component {

    state = {
        id: null,
        cartId: null,
        batteryPercentage: null,
        latitude: null,
        info: null,
        longitude: null
    }

    loadData = (cartId) => {
        const cart = this.props.carts.find(mov => mov.id == cartId);
        this.setState({ ...cart })
    }

    
    handleSaveChanges = (cartId, batteryPercentage, latitude, longitude, info, id) => {
        async function updateAndWaitForIt(reduxUpdateFunction) {
            const cart = await updateCart({ cartId, batteryPercentage, latitude, longitude, info }, id)

            reduxUpdateFunction(
                cart.cartId, 
                cart.batteryPercentage, 
                cart.longitude, 
                cart.info, 
                cart.latitude, 
                id);
        }

        updateAndWaitForIt(this.props.editExistedCart)
    }

    componentDidMount() {
        if(this.props.id) {
            this.loadData(this.props.id);
        }
    }
    render() {
        return (
            <CreateOrEdit
                cart={this.state}
                handleSave={this.handleSaveChanges}
                handleCloseDialog={this.props.handleCloseDialog}
            />
        );
    }
}

const mapStateToProps = state => ({
    carts: state.carts
})

const mapDispatchToProps = dispatch => ({
    editExistedCart: (cartId, batteryPercentage, longitude, info, latitude, id) =>
        dispatch(editCart(id,cartId, batteryPercentage, longitude, info, latitude))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditContainer)
