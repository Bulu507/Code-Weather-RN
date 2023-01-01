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

export const getFullDate = (val, format) => {
  const valueFormat = setDefaultData(format, 'ddd MMM DD');

  const dataDate = new Date(val);
  const formated = date.format(dataDate, valueFormat);

  return formated;
};

export const getDay = (val, format) => {
  const valueFormat = setDefaultData(format, 'ddd');

  const dataDate = new Date(val);
  const formated = date.format(dataDate, valueFormat);

  return formated;
};

export const getDate = (val, format) => {
  const valueFormat = setDefaultData(format, 'DD');

  const dataDate = new Date(val);
  const formated = date.format(dataDate, valueFormat);

  return formated;
};
