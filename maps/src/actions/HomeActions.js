import {
  ADDR_1_CHANGED,
  ADDR_2_CHANGED
} from './types';

export const addr1Changed = (text) => {
  return {
    type: ADDR_1_CHANGED,
    payload: text
  };
};

export const addr2Changed = (text) => {
  return {
    type: ADDR_2_CHANGED,
    payload: text
  };
};
