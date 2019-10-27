import React from 'react';
import PropTypes from 'prop-types';
import { IVehicle } from '../../utility/interfaces';

import './vehicleItem.css';

const VehicleItem = ({ name, platesNumber }) => {
    return (
        <div className='vehicle-container'>
            <h3 className='vehicle-header'>{name}</h3>
            <span>{platesNumber}</span>
        </div>
    );
}

VehicleItem.propTypes = {
    vehicle: PropTypes.shape(IVehicle)
};

export default VehicleItem;