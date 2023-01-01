import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {globalReducer} from './globalReducer';
import {weatherReducer} from './weatherReducer';
import {forecastReducer} from './forecastReducer';

const reducer = combineReducers({
  globalReducer,
  weatherReducer,
  forecastReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
