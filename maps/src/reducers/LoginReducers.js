import {Animated} from 'react-native';

import {
  FINISHED_ANIMATING_SLIDER,
  FINISHED_ANIMATING_TITLE
} from './../actions/types';

const INITIAL_STATE = {
  sliderAnimationRunning: true,
  animatingTitle: true
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FINISHED_ANIMATING_SLIDER:
      return {...state, sliderAnimationRunning: false}
    case FINISHED_ANIMATING_TITLE:
      return {...state, animatingTitle: false}
    default:
      return {...state};
  }
};
