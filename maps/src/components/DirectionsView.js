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

const _renderItem = (direction,index) => {
  return (
    <View style={styles.listViewStyle}>
      <View style={styles.number}>
        <Text style={styles.numberTextStyle}>{index}</Text>
      </View>
      <Text style={styles.listTextStyle}>{direction}</Text>
    </View>
  );
};
const DirectionsView = (props) => {
  return(
      <View style={styles.viewStyle}>
        <FlatList
          style={{flex:1}}
          data={props.directionsData}
          renderItem={({item,index})=>_renderItem(item, index)}
          keyExtractor={(index)=>index.toString()}
        />
      </View>
  );
};

const styles = {
  viewStyle:{
    width: GLOBALS.SCREEN_WIDTH,
    height: GLOBALS.SCREEN_HEIGHT*.9,
    backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
    borderRadius: 20
  },
  listViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 80
  },
  listTextStyle: {
    fontSize: 20,
    fontColor: 'white',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
  },
  number: {
    height: 60,
    width: 60,
    backgroundColor: GLOBALS.COLORS.PURPLE,
    borderRadius: 30,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberTextStyle: {
    fontSize: 20,
  }
}

const mapStateToProps = state => {
  return {
    directionsData: state.home.directionsData
  };
};

export default connect(mapStateToProps)(DirectionsView);
