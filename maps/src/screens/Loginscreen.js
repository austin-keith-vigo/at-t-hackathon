import React from 'react';
import {View, Text} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';

//Components
import {SliderTile} from './../components';

const Loginscreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      {console.log(props)}
      <SliderTile
        text="MAPS"
        animationDuration={2000}
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
const mapStateToProps = state => {
  return {
      sliderAnimationRunning: state.login.sliderAnimationRunning
  };
};

export default connect(mapStateToProps)(Loginscreen);
