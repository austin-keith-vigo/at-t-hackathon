import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import GLOBALS from './../Globals';

const AddressToFromTextFields = props => {
  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        placeholder="From: "
        value={props.addr1Val}
        onChangeText={props.addr1onChangeText}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="To: "
        value={props.addr2Val}
        onChangeText={props.addr2onChangeText}
      />
    </View>
  );
};

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
