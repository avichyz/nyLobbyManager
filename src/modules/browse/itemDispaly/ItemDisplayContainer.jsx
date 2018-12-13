import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ItemDisplay from './ItemDisplay';
import { deleteCart as deleteCartRedux } from '../../../redux/actions';
import { deleteCart } from '../../../managers/cartsServiceManager'
import { connect } from 'react-redux'

class ItemDisplayContainer extends Component {

    state = {
        longitude: null,
        info: null,
        latitude: null
    }

    static proptypes = {
        id: PropTypes.number,
        cartId: PropTypes.string,
        batteryPercentage: PropTypes.string,
        longitude: PropTypes.string,
        info: PropTypes.string,
        latitude: PropTypes.string,
    }

    loadData = (cartId) => {
        const cart = this.props.carts.find(mov=> mov.id == cartId);
        this.setState({...cart})
    }

    handleDelete = (id) =>
    {
        deleteCart(id).then(() => {
            this.props.deleteCart(id);
        })
    }

    componentDidMount() {
        if (this.props.id) {
            this.loadData(this.props.id);
        }
    }

    componentDidUpdate(prevProps) {
        if ((this.props.id !== prevProps.id) || (this.props.carts !== prevProps.carts))  {
            this.loadData(this.props.id);
        }
    }

    render() {
        const { id } = this.props;
        const { cartId, batteryPercentage, info, longitude, latitude} = this.state;
        
        return (
           <ItemDisplay 
                cartId={cartId}
                id={id}
                batteryPercentage={batteryPercentage}
                latitude={latitude}
                info={info}
                longitude={longitude}
                onDelete={this.handleDelete}
                />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCart: (id) => dispatch(deleteCartRedux(id))
})

const mapStateToProps = state => ({
    carts: state.carts
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDisplayContainer)

