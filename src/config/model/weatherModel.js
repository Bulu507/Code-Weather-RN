import Config from 'react-native-config';
import {isEmptyData} from '../../utils';

const initWeather = {
  main: '',
  description: '',
  icon: {uri: ''},
};

export const Weather = (data) => {
  if (isEmptyData(data)) {
    return initWeather;
  }

  const weather = data[0];
  const weatherIcon = {uri: `${Config.IMG_URL}/${weather?.icon}.png`};

  return {
    main: weather?.main,
    description: weather?.description,
    icon: weatherIcon,
  };
};
