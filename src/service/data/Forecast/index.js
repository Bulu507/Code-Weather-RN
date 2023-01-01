import {GET} from '../api.service';

export const Get3HourlyForecast = (coords) => {
  return GET('data/2.5/forecast', {...coords, units: 'imperial'});
};
