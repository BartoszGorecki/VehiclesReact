import PropTypes from 'prop-types';

export const IPosition = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
}

const IMapColor = {
    rgb: PropTypes.string,
    alpha: PropTypes.number
}

const IPicture = {
    id: PropTypes.string,
    name: PropTypes.string,
    extension: PropTypes.string,
    contentType: PropTypes.string
}

export const IVehicle = {
    address: PropTypes.string,
    batteryLevelPct: PropTypes.number,
    color: PropTypes.string,
    description: PropTypes.string,
    discriminator: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.shape(IPosition),
    locationDescription: PropTypes.string,
    mapColor: PropTypes.shape(IMapColor),
    metadata: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.shape(IPicture),
    platesNumber: PropTypes.string,
    promotion: PropTypes.string,
    rangeKm: PropTypes.number,
    reservation: PropTypes.string,
    reservationEnd: PropTypes.string,
    sideNumber: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string
}