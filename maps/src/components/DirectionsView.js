import React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated
} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';

const DirectionsView = (props) => {
  return(
    <View style={styles.viewStyle}>
    </View>
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
