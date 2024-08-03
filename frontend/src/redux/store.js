import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import droneReducer from './reducers/droneReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  drones: droneReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;