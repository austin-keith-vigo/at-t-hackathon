import {combineReducers} from 'redux';

//Reducers
import LoginReducers from './LoginReducers';
export default combineReducers({
  login: LoginReducers
});
