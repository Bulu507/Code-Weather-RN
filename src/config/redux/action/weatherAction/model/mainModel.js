import {setWeatherReducer} from '..';
import {
  getMeterToMiles,
  isEmptyData,
  pressureHpaToInhg,
} from '../../../../../utils';

const initMain = {
  temp: 0.0,
  tempLabel: '',
  feelsLike: 0.0,
  feelsLikeLabel: '',
  pressure: 0,
  labelPressure: '',
  humidity: 0,
  humidityLabel: '',
  visibility: 0.0,
  visibilityLabel: '',
  dp: '',
};

export const setMain = (data, visibility) => async (dispatch) => {
  if (isEmptyData(data)) {
    dispatch(setWeatherReducer('main', initMain));
    return;
  }

  const main = data;
  const temp = Math.round(main?.temp);
  const feelsLike = Math.round(main?.feels_like);
  const tempLabel = `${temp}℉`;
  const feelsLikeLabel = `${feelsLike}℉`;
  const humidity = main?.humidity;
  const humidityLabel = `${humidity}%`;
  const dp = Math.round(main?.temp_min);
  const dpLabel = `${dp}℉`;
  const pressure = main?.pressure;
  const formatedPressure = pressureHpaToInhg(pressure).toFixed(2);
  const pressureLabel = `${formatedPressure}inHg`;
  const visibilityInMiles = getMeterToMiles(visibility);
  const formatedVisibility = visibilityInMiles.toFixed(1);
  const visibilityLabel = `${formatedVisibility}mi`;

  dispatch(
    setWeatherReducer('main', {
      temp: temp,
      tempLabel: tempLabel,
      feelsLike: feelsLike,
      feelsLikeLabel: feelsLikeLabel,
      humidity: humidity,
      humidityLabel: humidityLabel,
      pressure: formatedPressure,
      labelPressure: pressureLabel,
      visibility: formatedVisibility,
      visibilityLabel: visibilityLabel,
      dp: dpLabel,
    }),
  );
};
