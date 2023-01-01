export const setGlobalReducer = (key, value) => (dispatch) => {
  dispatch({type: 'SET_GLOBAL_REDUCER', key: key, value: value});
};

export const replaceGlobalReducer = (params) => (dispatch) => {
  dispatch({type: 'REPLACE_GLOBAL_REDUCER', value: params});
};

export const resetGlobalReducer = () => (dispatch) => {
  dispatch({type: 'RESET_GLOBAL'});
};

export * from './service';
