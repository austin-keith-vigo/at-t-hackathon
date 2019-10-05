import React from 'react';
import {View, Text} from 'react-native';
import GLOBALS from './../Globals';

//Components
import {SliderTile} from './../components';

const Loginscreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <SliderTile
        text="MAPS"
      />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: GLOBALS.COLORS.PURPLE
  }
};

export default Loginscreen;
