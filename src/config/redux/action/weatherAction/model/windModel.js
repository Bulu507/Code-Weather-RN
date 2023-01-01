import {setWeatherReducer} from '..';
import {getWindDirection, isEmptyData} from '../../../../../utils';

const initWind = {
  speed: 0,
  deg: 220,
  direction: '',
  labelWindSpeed: '',
};

export const setWind = (data) => async (dispatch) => {
  if (isEmptyData(data)) {
    dispatch(setWeatherReducer('wind', initWind));
    return;
  }

  const windSpeed = data?.speed?.toFixed(1);
  const windDirection = getWindDirection(data?.deg);
  const labelWindSpeed = `${windSpeed}mph ${windDirection}`;

  dispatch(
    setWeatherReducer('wind', {
      speed: windSpeed,
      deg: data?.deg,
      direction: windDirection,
      labelWindSpeed: labelWindSpeed,
    }),
  );
};
