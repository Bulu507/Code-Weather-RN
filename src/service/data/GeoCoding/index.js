import {GET} from '../api.service';

export const GetLocationInfo = (coords) => {
  return GET('geo/1.0/reverse', {...coords});
};
