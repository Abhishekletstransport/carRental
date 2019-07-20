import {combineReducers} from 'redux';
import carDetailsReducer from './carDetailsReducer';
import applicationReducer from './applicationReducer';

const appReducer = combineReducers({
  carDetailsReducer,
  applicationReducer,
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};


export default RootReducer;
