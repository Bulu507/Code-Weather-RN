import pressureConverter from 'pressure-converter';

export const getWindDirection = (deg) => {
  let compassSector = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];

  return compassSector[(deg / 22.5).toFixed(0)];
};

export const getMeterToMiles = (val) => {
  return val * 0.000621371192;
};

export const pressureHpaToInhg = (val) => {
  const mmHg = pressureConverter.convertPressure(val, 'hPa', 'mmHg');
  const inHg = mmHg / 25.4;

  return inHg;
};
