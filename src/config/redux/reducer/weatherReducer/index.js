const initialState = {
  weather: {},
  main: {},
  wind: {},
  UV: 0.0,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER_REDUCER':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_WEATHER_REDUCER':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_WEATHER':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
