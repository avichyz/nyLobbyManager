import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { selectCart, loadCartsWithData } from '../../redux/actions'

import Browse from './Browse';
import CreateContainer from '../createOrEdit/CreateContainer';


class BrowseContainer extends Component {

    state = ({ addDialogOpened: false });

    handleOpen = () => {
        this.setState({ addDialogOpened: true });
    }

    handleClose = () => {
        this.setState({ addDialogOpened: false });
    }

    handleSelectCart = (id) => {
        this.props.onSelectCart(id);
    }

    componentDidMount() {
        this.props.loadCarts();
    }

    render() {
        const { selectedId, carts } = this.props;

        return (
            <Fragment>
                {
                    !this.state.addDialogOpened &&
                    <Browse
                        carts={carts}
                        selectedId={selectedId}
                        handleSelectCart={this.handleSelectCart}
                        handleOpenDialog={this.handleOpen}
                        handleCloseDialog={this.handleClose} />
                }
                {
                    this.state.addDialogOpened &&
                    <CreateContainer handleCloseDialog={this.handleClose} />

                }
            </Fragment>

        )
    }
}

const mapStateToProps = state => ({
    carts: (state.carts || []),
    selectedId: state.selectedId
})

const mapDispatchToProps = dispatch => ({
    onSelectCart: id => dispatch(selectCart(id)),
    loadCarts: () => dispatch(loadCartsWithData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseContainer)
