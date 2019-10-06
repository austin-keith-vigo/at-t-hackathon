import {Animated} from 'react-native';

import {
  ADDR_1_CHANGED,
  ADDR_2_CHANGED,
  SHOWING_SUB_VIEW
} from './../actions/types';

const INITIAL_STATE = {
  address1: '',
  address2: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADDR_1_CHANGED:
      return {...state, address1: action.payload}
    case ADDR_2_CHANGED:
      return {...state, address2: action.payload}
    default:
      return {...state};
  };
};
