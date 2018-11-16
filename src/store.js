import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app';

export default createStore(combineReducers({ app: appReducer }), {}, applyMiddleware(thunkMiddleware));
