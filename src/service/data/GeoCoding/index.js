import {GET} from '../api.service';

export const GetLocationInfo = () => {
  return GET('geo/1.0/reverse', {
    lat: -7.7794137,
    lon: 110.4050793,
  });
};
