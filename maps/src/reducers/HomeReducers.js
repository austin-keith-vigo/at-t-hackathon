import {Animated} from 'react-native';

import {
  ADDR_1_CHANGED,
  ADDR_2_CHANGED,
  SHOWING_SUB_VIEW,
  CLEAR_ADDR_FIELDS,
  GOT_DIRECTIONS_DATA,
  DELETE_DIRECTIONS_DATA
} from './../actions/types';

const INITIAL_STATE = {
  address1: '',
  address2: '',
  directionsData: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADDR_1_CHANGED:
      return {...state, address1: action.payload}
    case ADDR_2_CHANGED:
      return {...state, address2: action.payload}
    case CLEAR_ADDR_FIELDS:
      return {...state, address1: '', address2: ''}
    case GOT_DIRECTIONS_DATA:
      return {...state, directionsData: action.payload}
    case DELETE_DIRECTIONS_DATA:
      return {...state, directionsData: []}
    default:
      return {...state};
  };
};
