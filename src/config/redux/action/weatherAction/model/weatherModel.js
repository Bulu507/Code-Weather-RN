import Config from 'react-native-config';
import {setWeatherReducer} from '..';
import {isEmptyData} from '../../../../../utils';

const initWeather = {
  main: '',
  description: '',
  icon: {uri: ''},
};

export const setWeather = (data) => async (dispatch) => {
  if (isEmptyData(data)) {
    dispatch(setWeatherReducer('weather', initWeather));
    return;
  }

  const weather = data[0];
  const weatherIcon = {uri: `${Config.IMG_URL}/${weather?.icon}.png`};

  dispatch(
    setWeatherReducer('weather', {
      main: weather?.main,
      description: weather?.description,
      icon: weatherIcon,
    }),
  );
};
