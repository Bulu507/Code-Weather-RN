const initialState = {
  listHours: {},
  listDaily: {},
  showMode: 'tab',
  tabIndex: 0,
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORECAST_REDUCER':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_FORECAST_REDUCER':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_FORECAST_REDUCER':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
