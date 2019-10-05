import React, {Component} from 'react';
import {
  View,
  TextInput,
  Animated
} from 'react-native';
import GLOBALS from './../Globals';

class AddressToFromTextFields extends Component {
  constructor(props){
    super(props);
    this._xPos = new Animated.Value(0);
  }
  componentDidMount(){
    this._slideRight();
  }
  _slideRight(){
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
      outputRange: [-GLOBALS.SCREEN_WIDTH, 0]
    });

    return (
      <Animated.View
        style={{
          transform: [{translateX: xPos}]
        }}
      >
        <TextInput
          style={styles.textInputStyle}
          placeholder="From: "
          value={this.props.addr1Val}
          onChangeText={this.props.addr1onChangeText}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="To: "
          value={this.props.addr2Val}
          onChangeText={this.props.addr2onChangeText}
        />
      </Animated.View>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 50,
    width: '80%',
    backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
    paddingLeft: 20,
    color: 'white',
    fontSize: 20
  }
}


export default AddressToFromTextFields;
