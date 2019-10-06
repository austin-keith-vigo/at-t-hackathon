import {
  ADDR_1_CHANGED,
  ADDR_2_CHANGED,
  SHOWING_SUB_VIEW,
  CLEAR_ADDR_FIELDS,
  GOT_DIRECTIONS_DATA,
  DELETE_DIRECTIONS_DATA
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

export const showSubView = (slideDown) => {
  slideDown();
  return {
    type:SHOWING_SUB_VIEW
  };
};

export const clearAddrFields = () => {
  return {
    type: CLEAR_ADDR_FIELDS
  };
};

export const updateSubViewData = (data) => {
  return {
    type: GOT_DIRECTIONS_DATA,
    payload: data
  };
};

export const deleteDirectionsData = () => {
  return {
    type: DELETE_DIRECTIONS_DATA
  };
};
