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
        title: PropTypes.string,
        content: PropTypes.string,
        isHidden: PropTypes.bool,
        info: PropTypes.string,
        className: PropTypes.string,
        handleCloseDialog: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: null,
            content: null,
            isHidden: false,
            info: null
        }

    }
    
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSave = (event) => {
        event.preventDefault();
        const { id, title, content, isHidden, info } = this.state;

        this.props.handleSave({ title: title, content: content, info: info, isHidden: isHidden, id: id});
        this.props.handleCloseDialog();
    }

    componentDidUpdate(prevProps) {
        if (this.props.announcement != prevProps.announcement) {
            this.setState({ ...this.props.announcement });
        }
    }
      

    render() {
        const { id, title, content, info, isHidden } = this.state;
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
                                error={required(title)}
                                id="standard-required"
                                label="כותרת"
                                value={title || ""}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.handleChange('title')}
                                className={styles.textField}
                                margin="normal"
                            />

                            <TextField
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                id="standard-multiline-static"
                                label="תוכן"
                                error={required(content)}
                                value={content || ""}
                                onChange={this.handleChange('content')}
                                multiline
                                rows="4"
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
                                label="מידע"
                                value={info || ""}
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