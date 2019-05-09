import authReducer from './authReducer';
import lofiReducer from './lofiReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  lofi: lofiReducer,
  firestore: firebaseReducer,
  firebase: firebaseReducer
});

export default rootReducer;