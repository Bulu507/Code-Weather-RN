import {setMain, setWeather, setWind} from './model';

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
  dispatch(setWeather(data?.weather));
  dispatch(setMain(data?.main, data?.visibility));
  dispatch(setWind(data?.wind));
  dispatch(setWeatherReducer('UV', dataUV?.value));
};

export * from './model';
