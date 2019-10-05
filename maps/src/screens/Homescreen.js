import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

class Homescreen extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>anohther</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'blue',
    flex: 1
  }
};


export default Homescreen;
