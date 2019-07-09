import { combineReducers } from 'redux';

import menuReducer from './menuReducer';
import fontReducer from './fontReducer';

export default combineReducers({
  menuReducer,
  fontReducer
});