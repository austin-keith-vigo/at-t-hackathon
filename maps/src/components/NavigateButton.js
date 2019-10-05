import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';
import GLOBALS from './../Globals';

class NavigateButton extends Component {
  constructor(props){
    super(props);
    this._xPos = new Animated.Value(0);
  }
  componentDidMount(){
    this._slideLeft();
  }
  _slideLeft(){
    this._xPos.setValue(0);
    Animated.timing(
      this._xPos,
      {
        toValue: 1,
        duration: this.props.animationDuration
      }
    ).start();
  }

  render(){
    const xPos = this._xPos.interpolate({
      inputRange: [0,1],
      outputRange: [GLOBALS.SCREEN_WIDTH,GLOBALS.SCREEN_WIDTH*.6]
    });

    return(
      <TouchableOpacity
        onPress={this.props.buttonPressed}
      >
        <Animated.View
          style={{
            width: '40%',
            backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            transform: [{translateX: xPos}]
          }}
        >
          <Text style={styles.buttonTextStyle}>Navigate</Text>
        </Animated.View>
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
