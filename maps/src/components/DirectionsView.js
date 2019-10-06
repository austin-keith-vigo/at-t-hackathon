import React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated
} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
const DirectionsView = (props) => {
  return(
    <GestureRecognizer onSwipeDown = {props.closeSubView}>
      <View style={styles.viewStyle}>
      </View>
    </GestureRecognizer>
  );
};

const styles = {
  viewStyle:{
    width: GLOBALS.SCREEN_WIDTH,
    height: GLOBALS.SCREEN_HEIGHT*.9,
    backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
    borderRadius: 20
  }
}


export default DirectionsView;
