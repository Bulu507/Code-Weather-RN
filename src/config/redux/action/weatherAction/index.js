import {isEmptyData} from '../../../../utils';
import {MainTemperature, Weather, Wind} from '../../../model';

export const setWeatherReducer = (key, value) => (dispatch) => {
  dispatch({type: 'SET_WEATHER_REDUCER', key: key, value: value});
};

export const replaceWeatherReducer = (params) => (dispatch) => {
  dispatch({type: 'REPLACE_WEATHER_REDUCER', value: params});
};

export const resetWeatherReducer = () => (dispatch) => {
  dispatch({type: 'RESET_WEATHER'});
};

export const setDataWeather = (data, dataUV) => (dispatch) => {
  const weather = Weather(data?.weather);
  const main = MainTemperature(data?.main, data?.visibility);
  const wind = Wind(data?.wind);
  const uv = isEmptyData(dataUV) ? 0.0 : dataUV?.value;

  dispatch(
    replaceWeatherReducer({
      weather: weather,
      main: main,
      wind: wind,
      UV: uv,
    }),
  );
};
