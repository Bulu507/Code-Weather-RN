import {
  dateToAMPM,
  getDate,
  getDay,
  getFullDate,
  isEmptyData,
} from '../../utils';
import {MainTemperature} from './mainTemperature';
import {Weather} from './weatherModel';
import {Wind} from './windModel';

export const ListHoursForcast = (data) => {
  const initList = [];
  if (isEmptyData(data)) {
    return initList;
  }

  let listData = [];

  data?.list?.map((item) => {
    let obj = {};
    let weather = Weather(item?.weather);
    let main = MainTemperature(item?.main);
    let time = dateToAMPM(item?.dt_txt);

    obj = {
      weather: weather,
      temp: main?.temp,
      tempLabel: main?.tempLabel,
      time: time,
    };
    listData.push(obj);
  });

  return listData;
};

export const ListDailyForcast = (data) => {
  const initList = [];
  if (isEmptyData(data)) {
    return initList;
  }

  let listData = [];

  data?.list?.map((item, idx) => {
    if (idx % 8 === 0) {
      let obj = {};
      let weather = Weather(item?.weather);
      let main = MainTemperature(item?.main, item?.visibility);
      let wind = Wind(item?.wind);
      let fullDate = getFullDate(item?.dt_txt);
      let day = getDay(item?.dt_txt);
      let date = getDate(item?.dt_txt);
      let dateObj = {
        fullDate: fullDate,
        day: day,
        date: date,
      };

      obj = {
        weather: weather,
        wind: wind,
        main: main,
        date: dateObj,
      };
      listData.push(obj);
    }
  });

  return listData;
};
