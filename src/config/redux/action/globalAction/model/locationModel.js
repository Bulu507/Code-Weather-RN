import {setGlobalReducer} from '..';
import {isEmptyData} from '../../../../../utils';

const initState = {
  name: '',
  lat: 0.0,
  lon: 0.0,
  country: '',
  state: '',
};

const initCoords = {lon: 0.0, lat: 0.0};

export const setLocationData = (data) => async (dispatch) => {
  if (isEmptyData(data)) {
    dispatch(setGlobalReducer('location', initState));
    dispatch(setGlobalReducer('coords', initCoords));
    return;
  }

  const responseData = data[0];
  const coords = {lat: responseData?.lat, lon: responseData?.lon};

  dispatch(
    setGlobalReducer('location', {
      name: responseData?.name,
      lat: responseData?.lat,
      lon: responseData?.lon,
      country: responseData?.country,
      state: responseData?.state,
    }),
  );
  dispatch(setGlobalReducer('coords', coords));
};
