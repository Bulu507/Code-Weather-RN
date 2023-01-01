import {getWindDirection, isEmptyData} from '../../utils';

const initialize = {
  speed: 0,
  deg: 220,
  direction: '',
  labelWindSpeed: '',
};

export const Wind = (data) => {
  if (isEmptyData(data)) {
    return initialize;
  }

  const windSpeed = data?.speed?.toFixed(1);
  const windDirection = getWindDirection(data?.deg);
  const labelWindSpeed = `${windSpeed}mph ${windDirection}`;

  return {
    speed: windSpeed,
    deg: data?.deg,
    direction: windDirection,
    labelWindSpeed: labelWindSpeed,
  };
};
