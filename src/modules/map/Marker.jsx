import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker as GoogleMarker, MapMarkerIcons } from './GoogleMap'
import './Map.style.css'

class Marker extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired, 
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired, 
    isSelected: PropTypes.bool,
    isHovered: PropTypes.bool
  };
  static defaultProps = {};

  state = {
    isHovered: this.props.isHovered || false
  };

  onMarkerEnter = () => {
    this.setState({ isHovered: true });
  };

  onMarkerLeave = () => {
    this.setState({ isHovered: false });
  }

  onClick = () => {
    this.props.handleClick(this.props.id)
  }

  render() {
    const { id, latitude, longitude, isSelected } = this.props;

    return (
      <GoogleMarker
        key={id}
        position={{ lat: latitude, lng: longitude }}
        onClick={this.onClick}
        onMouseOver={this.onMarkerEnter}
        onMouseOut={this.onMarkerLeave}
        icon={isSelected ? MapMarkerIcons.Selected :
        (this.state.isHovered || this.props.isHovered) ? MapMarkerIcons.Hovered :
        MapMarkerIcons.Regular} />
    );
  }

}

export default Marker;