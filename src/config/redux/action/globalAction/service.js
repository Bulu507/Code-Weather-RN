import {GetLocationInfo} from '../../../../service';

export const GetAllData = () => async (dispatch) => {
  try {
    const data = await GetLocationInfo();
    console.log('cek datalocation', data);
  } catch (error) {
    console.log('cek error', error);
  }
};
