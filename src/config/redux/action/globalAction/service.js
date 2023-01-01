import {setGlobalReducer} from '.';
import {
  ListDailyForcast,
  ListHoursForcast,
  Location,
  replaceForecastReducer,
} from '../../..';
import {HOME_PAGE} from '../../../../parameter';
import {
  Get3HourlyForecast,
  GetCurrentUV,
  GetCurrentWeather,
  GetLocationInfo,
} from '../../../../service';
import {setDataWeather} from '../weatherAction';

export const fetchAllData = (coords, navigation) => async (dispatch) => {
  dispatch(setGlobalReducer('loading', true));
  try {
    const location = await GetLocationInfo(coords);
    const objLocation = Location(location);
    dispatch(setGlobalReducer('location', objLocation));
    const currentWeather = await GetCurrentWeather(coords);
    const currentUV = await GetCurrentUV(coords);
    dispatch(setDataWeather(currentWeather, currentUV));
    const forcastHours = await Get3HourlyForecast(coords);
    const listHoursForcast = ListHoursForcast(forcastHours);
    const listDailyForcast = ListDailyForcast(forcastHours);
    dispatch(
      replaceForecastReducer({
        listHours: listHoursForcast,
        listDaily: listDailyForcast,
      }),
    );
  } catch (error) {
    console.log('cek error', error);
  }
  dispatch(setGlobalReducer('loading', false));
  navigation.navigate(HOME_PAGE);
};
