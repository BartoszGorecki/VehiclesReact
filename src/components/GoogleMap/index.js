import React from "react";
import PropTypes from 'prop-types';
import { IVehicle } from '../../utility/interfaces';
import { API_KEY } from '../../secret/keys';

import './googleMap.css';

const GOOGLE_MAP = 'google-map';

class Map extends React.Component {

  componentDidMount() {
    console.log(this.props.filteredVehicles)
    this.createGoogleMapAPIScript();
  }

  componentDidUpdate() {
    this.props.filteredVehicles.length > 0 ? this.renderMapWithMarkers() : this.renderCentralizedMap();
  }

  createGoogleMapAPIScript = () => {
    const script = document.createElement("script");
    script.src = `http://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      this.renderMapWithMarkers();
    });
  }

  createMarkers = () => {
    const { filteredVehicles } = this.props;
    this.bounds = new window.google.maps.LatLngBounds();
    for (var i = 0; i < filteredVehicles.length; i++) {
      const { latitude, longitude } = filteredVehicles[i].location;
      const myLatLng = new window.google.maps.LatLng(latitude, longitude);
      const marker = new window.google.maps.Marker({
        position: myLatLng,
        label: 'B',
        map: this.map
      });
      marker.setMap(this.map);
      this.bounds.extend(myLatLng);
    }
    this.map.fitBounds(this.bounds);
  };

  renderMapWithMarkers = () => {
    this.map = new window.google.maps.Map(
      document.getElementById(GOOGLE_MAP),
      {
        zoom: 8
      }
    );
    this.createMarkers();
  };

  renderCentralizedMap = () => {
    const center = { lat: 51.743, lng: 19.39 };
    this.map = new window.google.maps.Map(
      document.getElementById(GOOGLE_MAP),
      {
        center,
        zoom: 8
      }
    );
  };

  render() {
    return (
      <div className="map">
        <div id={GOOGLE_MAP} />
      </div>
    );
  }
}

Map.propTypes = {
  filteredVehicles: PropTypes.arrayOf(PropTypes.shape(IVehicle)).isRequired
};

export default Map;
