import date from 'date-and-time';
import meridiem from 'date-and-time/plugin/meridiem';
import {setDefaultData} from '../data';

export const dateToAMPM = (val, type) => {
  const formatDate = ['ha', 'HH:mm'];
  const valueType = setDefaultData(type, 0);

  date.plugin(meridiem);
  const dataDate = new Date(val);
  const format = date.format(dataDate, formatDate[valueType]);

  return format;
};
