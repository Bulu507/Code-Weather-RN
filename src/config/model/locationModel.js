import {isEmptyData} from '../../utils';

const initCoords = {lon: 0.0, lat: 0.0};
const initState = {
  name: '',
  lat: 0.0,
  lon: 0.0,
  country: '',
  state: '',
  coords: initCoords,
};

export const Location = (data) => {
  if (isEmptyData(data)) {
    return initState;
  }

  const responseData = data[0];
  const coords = {lat: responseData?.lat, lon: responseData?.lon};

  return {
    name: responseData?.name,
    lat: responseData?.lat,
    lon: responseData?.lon,
    country: responseData?.country,
    state: responseData?.state,
    coords: coords,
  };
};
