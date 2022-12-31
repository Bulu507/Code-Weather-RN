import axios from 'axios';
import Config from 'react-native-config';

const {BASE_URL, API_KEY} = Config;

export const GET = async (path, passParams) => {
  const params = {...passParams, appid: API_KEY};
  console.log('cek params GET', params);
  const api = axios.create({baseURL: BASE_URL});
  const promise = new Promise((resolve, reject) => {
    api
      .get(`${BASE_URL}/${path}`, {
        params,
      })
      .then(
        (result) => {
          console.log('respons GET', result);
          resolve(result?.data);
        },
        (err) => {
          const error = err.response;
          console.log('cek error kirim = ', err);
          reject(error);
        },
      );
  });
  return promise;
};
