export const setForecastReducer = (key, value) => (dispatch) => {
  dispatch({type: 'SET_FORECAST_REDUCER', key: key, value: value});
};

export const replaceForecastReducer = (params) => (dispatch) => {
  dispatch({type: 'REPLACE_FORECAST_REDUCER', value: params});
};

export const resetForecastReducer = () => (dispatch) => {
  dispatch({type: 'RESET_FORECAST_REDUCER'});
};

export const setDetailForcast = (data) => (dispatch) => {
  dispatch(
    replaceForecastReducer({
      showMode: 'tab',
      detailData: data,
    }),
  );
};
