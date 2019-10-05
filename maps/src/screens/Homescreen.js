import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';

class Homescreen extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>

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
