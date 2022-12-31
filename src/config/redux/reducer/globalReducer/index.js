const initialState = {
  listData: [],
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GLOBAL_REDUCER':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'REPLACE_GLOBAL_REDUCER':
      return {
        ...state,
        ...action.value,
      };
    case 'RESET_GLOBAL':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
