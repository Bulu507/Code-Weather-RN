import {GET} from '../api.service';

export const GetCurrentWeather = (coords) => {
  return GET('data/2.5/weather', {...coords, units: 'imperial'});
};

export const GetCurrentUV = (coords) => {
  return GET('data/2.5/uvi', {...coords});
};
