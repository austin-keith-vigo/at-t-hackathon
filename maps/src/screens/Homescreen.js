import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import {connect} from 'react-redux';
import GLOBALS from './../Globals';
import {
  AddressToFromTextFields,
  NavigateButton,
  DirectionsView
} from './../components';
import {
  addr1Changed,
  addr2Changed,
  showSubView,
  clearAddrFields
} from './../actions';

class Homescreen extends Component{
  constructor(props){
    super(props);
    this.subViewYPos = new Animated.Value(0);
    this.slideAnimationDuration = 500
  }
  slideSubViewUp(){
    Animated.timing(
      this.subViewYPos,
      {
        toValue: 1,
        duration: this.slideAnimationDuration
      }
    ).start();
  }
  slideSubViewDown(){
    Animated.timing(
      this.subViewYPos,
      {
        toValue: 0,
        duration: this.slideAnimationDuration
      }
    ).start();
  }

  getDirections() {
    this.props.clearAddrFields();
    this.slideSubViewUp();
  }

  render(){
    const yPos = this.subViewYPos.interpolate({
      inputRange: [0,1],
      outputRange: [GLOBALS.SCREEN_HEIGHT, GLOBALS.SCREEN_HEIGHT * .07]
    })

    return(
      <View style={styles.viewStyle}>

        <AddressToFromTextFields
          addr1Val={this.props.address1}
          addr2Val={this.props.address2}
          addr1onChangeText={(text)=>this.props.addr1Changed(text)}
          addr2onChangeText={(text)=>this.props.addr2Changed(text)}
          animationDuration={2000}
        />

        <NavigateButton
          buttonPressed={this.getDirections.bind(this)}
          animationDuration={2000}
        />

        <Animated.View
          style={{
            position:'absolute',
            transform:[{translateY: yPos}]
          }}
        >
          <DirectionsView
            closeSubView={this.slideSubViewDown.bind(this)}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: GLOBALS.COLORS.PURPLE,
    flex: 1,
    justifyContent: 'center'
  },
  subViewContainer: {
    position: 'absolute',
  }
};

const mapStateToProps = state => {
  return {
    address1: state.home.address1,
    address2: state.home.address2
  };
};

const actions = {
  addr1Changed,
  addr2Changed,
  clearAddrFields
};

export default connect(mapStateToProps, actions)(Homescreen);
