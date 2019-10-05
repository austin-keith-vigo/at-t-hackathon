import {combineReducers} from 'redux';

//Reducers
import LoginReducers from './LoginReducers';
import HomeReducers from './HomeReducers';

export default combineReducers({
  login: LoginReducers,
  home: HomeReducers
});
