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
  clearAddrFields,
  updateSubViewData,
  deleteDirectionsData
} from './../actions';

class Homescreen extends Component{
  constructor(props){
    super(props);
    this.subViewYPos = new Animated.Value(0);
    this.slideAnimationDuration = 500;
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
    this.props.deleteDirectionsData()
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
    //Turn spaces into mods
    let address1 = this.props.address1.replace(' ','%');
    let address2 = this.props.address2.replace(' ','%');
    address1 = 'irvine%california';
    address2 = 'fullerton%california';
    const url = 'https://herokupolls.herokuapp.com/polls/?address1=' +
                address1 + '&address2=' +
                address2;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let directions = [];
        data['route']['legs'][0]['maneuvers'].forEach((maneuver) =>{
          directions.push(maneuver.narrative);
          this.props.updateSubViewData(directions);
        });
      });
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
  clearAddrFields,
  updateSubViewData,
  deleteDirectionsData
};

export default connect(mapStateToProps, actions)(Homescreen);
