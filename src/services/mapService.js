import { eventConfig } from '../config/eventConfig.js';
import { linksConfig } from '../config/linksConfig.js';

export const mapService = {
  getCoordinates: () => eventConfig.coordinates,

  getMapUrl: () => linksConfig.mapsQuery,

  getDirectionsUrl: () => linksConfig.directionsQuery,

  getEmbedMapUrl: () => {
    const { latitude, longitude } = eventConfig.coordinates;
    return `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`;
  },

  openMap: () => {
    window.open(linksConfig.mapsQuery, '_blank', 'noopener,noreferrer');
  },

  openDirections: () => {
    window.open(linksConfig.directionsQuery, '_blank', 'noopener,noreferrer');
  }
};
