import React from 'react';
import PropTypes from 'prop-types';
import { batterLevelSelectOpts, statusSelectOpts } from '../../utility/constans';

import './searchBar.css';

class SearchBar extends React.Component {

    handleChange = ({ target: { name, value } }) => this.props.handleVehicleChange(name, value);

    renderBatterLevelSelectOpts = () => {
        return batterLevelSelectOpts.map(({ text, value }) => {
            return (
                <option key={value} value={value}>{text}</option>
            );
        });
    }

    renderStatusSelectOpts = () => {
        return statusSelectOpts.map(({ text, value }) => {
            return (
                <option key={value} value={value}>{text}</option>
            );
        });
    }

    render() {
        return (
            <div className='search-container'>
                <h3 style={{ padding: '20px' }}>Search panel</h3>
                <div className='search-inputWrapper'>
                    <label htmlFor='batter'>Battery level</label>
                    <select id='battery' name='batteryLevel' value={this.props.batteryLevel} onChange={this.handleChange}>
                        {this.renderBatterLevelSelectOpts()}
                    </select>
                </div>
                <div className='search-inputWrapper'>
                    <label htmlFor='status'>Status</label>
                    <select id='status' name='status' value={this.props.status} onChange={this.handleChange}>
                        {this.renderStatusSelectOpts()}
                    </select>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    batteryLevel: PropTypes.string.isRequired,
    handleVehicleChange: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
};

export default SearchBar;