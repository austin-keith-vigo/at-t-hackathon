import {
  FINISHED_ANIMATING_SLIDER
} from './../actions/types';

const INITIAL_STATE = {
  sliderAnimationRunning: true
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FINISHED_ANIMATING_SLIDER:
      return {...state, sliderAnimationRunning: false}
    default:
      return {...state};
  }
};
