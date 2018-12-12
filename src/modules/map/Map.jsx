import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './GoogleMap';
import Marker from './Marker';
import './Map.style.css'

class Map extends Component {

  static propTypes = {
    rentAds: PropTypes.array, 
    selectedMarkerId: PropTypes.number, 
    hoveredItemId: PropTypes.number, 
    defaultLat: PropTypes.number.isRequired, 
    defaultLng: PropTypes.number.isRequired, 
    defaultZoom: PropTypes.number.isRequired,
    handleMarkerClick: PropTypes.func.isRequired,
  };

  
  render() {
    const { 
      rentAds, selectedMarkerId, hoveredItemId, defaultLat, defaultLng, 
      defaultZoom, handleMarkerClick } = this.props;

    return (
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={{ lat: defaultLat, lng: defaultLng }}>
        {
            rentAds && rentAds.map(ad =>
            <Marker
              key={ad.id}
              id={ad.id}
              latitude={ad.latitude}
              longitude={ad.longitude}
              handleClick={handleMarkerClick}
              isSelected={selectedMarkerId === ad.id}
              isHovered={hoveredItemId === ad.id}
            />)
        }
      </GoogleMap>
    );
  }

}

export default Map;