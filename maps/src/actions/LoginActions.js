import {
  FINISHED_ANIMATING_SLIDER,
  FINISHED_ANIMATING_TITLE
} from './types';

export const finishedAnimatingSlider = () => {
  return {
    type: FINISHED_ANIMATING_SLIDER
  };
};

export const finishedAnimatingTitle = (navigation) => {
  navigation.navigate('Home');
  return {
    type: FINISHED_ANIMATING_TITLE
  };
};
