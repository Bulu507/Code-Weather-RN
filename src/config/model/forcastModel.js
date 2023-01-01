import {dateToAMPM, isEmptyData} from '../../utils';
import {MainTemperature} from './mainTemperature';
import {Weather} from './weatherModel';

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
      let main = MainTemperature(item?.main);
      let time = dateToAMPM(item?.dt_txt);

      obj = {
        weather: weather,
        temp: main?.temp,
        tempLabel: main?.tempLabel,
        time: time,
      };
      listData.push(obj);
    }
  });

  return listData;
};
