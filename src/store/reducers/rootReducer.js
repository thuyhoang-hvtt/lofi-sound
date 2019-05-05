import authReducer from './authReducer';
import lofiReducer from './lofiReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  lofi: lofiReducer
});

export default rootReducer;