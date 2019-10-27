import React, { Component } from 'react';
import axios from 'axios';

import GoogleMap from './components/GoogleMap';
import SearchBar from './components/SearchBar';
import VehiclesList from './components/VehiclesList';

import './App.css';

class App extends Component {

  static displayName = 'AppComponent';

  state = {
    batteryLevel: '-1',
    filteredVehicles: [],
    loading: true,
    status: '',
    vehicles: null
  }

  componentDidMount = () => {
    this.getVehicles();
  }

  setFilteredVehicles = () => {
    const { batteryLevel, status, vehicles } = this.state;
    const filteredVehicles = vehicles
      .filter(vehicle => !!(vehicle.status.match(status.toUpperCase())))
      .filter(vehicle => vehicle.batteryLevelPct > +batteryLevel);
    this.setState({ filteredVehicles });
  }
                    
  getVehicles = async () => {
    await axios.get('https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE')
      .then(({ data: { objects }, status }) => {
          if (status === 200) {
              this.setState({ filteredVehicles: objects, vehicles: objects });
          }
      });
    this.setState({ loading: false });
  }

  handleVehicleChange = (name, value) => this.setState({ [name]: value }, () => this.setFilteredVehicles());

  render() {
    const { batteryLevel, filteredVehicles, loading, status } = this.state;

    return (
      <div className="app">
        <div className='app-panel'>
          <SearchBar 
            batteryLevel={batteryLevel}
            handleVehicleChange={this.handleVehicleChange}
            status={status}
            filteredVehicles={filteredVehicles}
          />
          <VehiclesList 
            filteredVehicles={filteredVehicles} 
            loading={loading} 
          />
        </div>
        <GoogleMap 
          filteredVehicles={filteredVehicles} 
        />
      </div>
    );
  }
}

export default App;
