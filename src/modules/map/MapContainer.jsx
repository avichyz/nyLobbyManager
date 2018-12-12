import React, { Component, Fragment } from 'react';
import Map from './Map';
import PropTypes from 'prop-types';

const SAN_FRANCISCO_COORDINATES = { latitude: 37.772, longitude: -122.431 };


class MapContainer extends Component {

  static propTypes = {
    rentAds: PropTypes.array,
    defaultLat: PropTypes.number,
    defaultLng: PropTypes.number,
    defaultZoom: PropTypes.number,
    selectedAdId: PropTypes.number,
    hoveredItemId: PropTypes.number
  };

  static defaultProps = {
    rentAds: [],
    selectedAdId: null,
    hoveredItemId: null,
    defaultLat: SAN_FRANCISCO_COORDINATES.latitude,
    defaultLng: SAN_FRANCISCO_COORDINATES.longitude,
    defaultZoom: 13
  };


  handleMarkerClick = (markerId) => {
    const selectedAdId = this.props.selectedAdId != markerId ? markerId : null;
    this.props.handleMarkerClick(selectedAdId);
  };

  render() {
    const { 
      rentAds, selectedAdId, defaultLat, 
      defaultLng, defaultZoom, hoveredItemId } = this.props;

    return (
      <Fragment>
        <div>before map</div>
      <Map
        defaultLat={defaultLat}
        defaultLng={defaultLng}
        defaultZoom={defaultZoom}
        rentAds={rentAds}
        handleMarkerClick={this.handleMarkerClick}
        selectedMarkerId={selectedAdId}
        hoveredItemId={hoveredItemId}
      />
        <div>after map</div>
      </Fragment>
    );
  }

}

export default MapContainer;