import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IVehicle } from '../../utility/interfaces';

import VehicleItem from '../VehicleItem';

import './vehiclesList.css';

class VehiclesList extends Component {

    renderFilteredVehicles = () => {
        const { filteredVehicles, loading } = this.props;
        if (filteredVehicles.length === 0 && !loading) {
            return <div>No results</div>
        }
        if (filteredVehicles.length === 0 && loading) {
            return <div>Loading...</div>
        }
        return filteredVehicles.map(vehicle => {
            return (
                <VehicleItem key={vehicle.platesNumber} { ...vehicle } />
            );
        })
        
    }

    render() {
        return (
            <div className='list-container'>
                {this.renderFilteredVehicles()}
            </div>
        );
    }
}

VehiclesList.propTypes = {
    filteredVehicles: PropTypes.arrayOf(PropTypes.shape(IVehicle)).isRequired,
    loading: PropTypes.bool.isRequired
};

export default VehiclesList;