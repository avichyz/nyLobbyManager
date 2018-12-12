import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { required } from './validation';
import styles from './createOrEdit.scss';


class CreateOrEdit extends React.Component {

    static propTypes = {
        id: PropTypes.string,
        cartId: PropTypes.string,
        batteryPercentage: PropTypes.string,
        latitude: PropTypes.string,
        longitude: PropTypes.string,
        info: PropTypes.string,
        className: PropTypes.string,
        handleCloseDialog: PropTypes.func
    }

    state = {
        id: null,
        cartId: null,
        batteryPercentage: null,
        latitude: null,
        longitude: null,
        info: null
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSave = (event) => {
        event.preventDefault();
        const { id, cartId, latitude, batteryPercentage, info, longitude } = this.state;

        this.props.handleSave(cartId, batteryPercentage, latitude, longitude, info, id);
        this.props.handleCloseDialog();
    }

    componentDidUpdate(prevProps) {
        if (this.props.cart != prevProps.cart) {
            this.setState({ ...this.props.cart });
        }
    }
      

    render() {
        const { id, cartId, latitude, batteryPercentage, info, longitude } = this.state;
        const rootClasses = classNames(styles.root, this.props.className)

        return (
            <Card className={rootClasses}>
                <CardContent className={styles.cardContent}>
                    <form
                        noValidate
                        autoComplete="off"
                        className={styles.form}
                        onSubmit={this.handleSave}>
                        <div className={styles.textBoxes}>
                            <TextField
                                required
                                error={required(cartId)}
                                id="standard-required"
                                label="cartId"
                                value={cartId}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange('cartId')}
                                className={styles.textField}
                                margin="normal"
                            />

                            <TextField
                                required
                                error={required(latitude)}
                                id="standard-required"
                                label="latitude"
                                value={latitude}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange('latitude')}
                                className={styles.textField}
                                margin="normal"
                            />
                            <TextField
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-multiline-static"
                                label="longitude"
                                error={required(longitude)}
                                value={longitude}
                                onChange={this.handleChange('longitude')}
                                multiline
                                rows="4"
                                className={styles.textField}
                                margin="normal"
                            />
                            <TextField
                                required
                                error={required(batteryPercentage)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-required"
                                label="batteryPercentage"
                                value={batteryPercentage}
                                onChange={this.handleChange('batteryPercentage')}
                                className={styles.textField}
                                margin="normal"
                            />
                          
                     
                            <TextField
                                required
                                error={required(info)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-required"
                                label="info"
                                value={info}
                                onChange={this.handleChange('info')}
                                className={styles.textField}
                                margin="normal"
                            />
                        </div>
                        <div className={styles.actionButtons}>
                            <Button
                                type="submit" label="login" className="button-submit"
                                variant="fab" color="primary" aria-label="Add">
                                <SaveIcon />
                            </Button>
                            <Button
                                type="cancel" label="login" className="button-submit"
                                variant="fab" color="primary" aria-label="Cancel"
                                onClick={this.props.handleCloseDialog}>
                                <CancelIcon />
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }
}


export default CreateOrEdit;