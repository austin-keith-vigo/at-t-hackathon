import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import {connect} from 'react-redux';
import GLOBALS from './../Globals';
import {AddressToFromTextFields, NavigateButton} from './../components';
import {
  addr1Changed,
  addr2Changed
} from './../actions';

class Homescreen extends Component{
  getDirections() {
    console.log(this.props);
  }
  render(){
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

const mapStateToProps = state => {
  return {
    address1: state.home.address1,
    address2: state.home.address2
  };
};

const actions = {
  addr1Changed,
  addr2Changed
};

export default connect(mapStateToProps, actions)(Homescreen);
