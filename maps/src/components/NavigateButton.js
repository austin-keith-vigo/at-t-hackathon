import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';
import GLOBALS from './../Globals';

class NavigateButton extends Component {
  render(){
    return(
      <TouchableOpacity
        onPress={this.props.buttonPressed}
      >
        <View style={styles.buttonViewStyle}>
          <Text style={styles.buttonTextStyle}>Navigate</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles ={
  buttonViewStyle: {
    alignSelf:'flex-end',
    backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10
  }
};
export default NavigateButton;
