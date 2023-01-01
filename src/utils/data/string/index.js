import {isEmptyData} from '../filterData';

export const warpingText = (value, idx) => {
  let text = value?.toString();
  let index = isEmptyData(idx) ? 20 : idx;

  if (text?.length > index) {
    text = text?.substring(0, index);
    text = `${text}...`;
    return text;
  }
  return text;
};
