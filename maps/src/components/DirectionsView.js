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

const _renderItem = (direction) => {
  return (
    <View style={{height: '20%', width: '30%'}}>
      <Text>{direction}</Text>
    </View>
  );
};
const DirectionsView = (props) => {
  return(
    <GestureRecognizer onSwipeDown = {props.closeSubView}>
      <View style={styles.viewStyle}>
        <FlatList
          style={{flex:1}}
          data={props.directionsData}
          renderItem={({item,index})=>_renderItem(item)}
          keyExtractor={(index)=>index.toString()}
        />
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

const mapStateToProps = state => {
  return {
    directionsData: state.home.directionsData
  };
};

export default connect(mapStateToProps)(DirectionsView);
