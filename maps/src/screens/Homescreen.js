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
  showSubView
} from './../actions';

class Homescreen extends Component{
  constructor(props){
    super(props);
    this.subViewYPos = new Animated.Value(0);
  }
  slideSubViewDown(){
    Animated.timing(
      this.subViewYPos,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();
  }

  getDirections() {
    this.slideSubViewDown()
  }

  render(){
    const yPos = this.subViewYPos.interpolate({
      inputRange: [0,1],
      outputRange: [GLOBALS.SCREEN_HEIGHT, GLOBALS.SCREEN_HEIGHT * .1]
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
          <DirectionsView/>
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
  showSubView
};

export default connect(mapStateToProps, actions)(Homescreen);
