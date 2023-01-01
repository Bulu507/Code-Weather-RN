import {setGlobalReducer, setLocationData} from '.';
import {HOME_PAGE} from '../../../../parameter';
import {
  GetCurrentUV,
  GetCurrentWeather,
  GetLocationInfo,
} from '../../../../service';
import {setDataWeather} from '../weatherAction';

export const fetchAllData = (coords, navigation) => async (dispatch) => {
  dispatch(setGlobalReducer('loading', true));
  try {
    const location = await GetLocationInfo(coords);
    dispatch(setLocationData(location));
    const currentWeather = await GetCurrentWeather(coords);
    const currentUV = await GetCurrentUV(coords);
    dispatch(setDataWeather(currentWeather, currentUV));
  } catch (error) {
    console.log('cek error', error);
  }
  dispatch(setGlobalReducer('loading', false));
  navigation.navigate(HOME_PAGE);
};
