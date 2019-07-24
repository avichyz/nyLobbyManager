import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './mainContainer.scss';


class MapContainer extends Component {

  static propTypes = {
  };

  static defaultProps = {
    
  };
  
  render() {
  
    return (
      <div className={styles.mainContainer}>
        <div>מסך ראשי</div>
      </div>
    );
  }

}

export default MapContainer;