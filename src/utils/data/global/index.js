import {isEmptyData} from '../filterData';
import {isUndefined} from 'lodash';

export const setDefaultData = (val, def) => {
  let data = def;
  if (!isUndefined(val)) {
    data = val;
  }

  return data;
};

export const mergeObj = (...params) => {
  let obj = {};
  if (!isEmptyData(params)) {
    params.map((i, idx) => {
      let item = params[idx];
      obj = {...obj, ...item};
    });
  }
  return obj;
};

// export const exceptObjKey = (obj, keyString) => {
//   const result = Object.keys(obj).reduce((acc, keyObj) => {
//     if (keyObj !== keyString) {
//       acc[keyObj] = obj[keyObj];
//     }
//     return acc;
//   }, {});

//   return result;
// };
