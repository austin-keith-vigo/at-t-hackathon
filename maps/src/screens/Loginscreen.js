import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';

//Components
import {SliderTile} from './../components';

const _renderTitle = (sliderAnimationRunning) => {
  if(!sliderAnimationRunning){
    return <Text style={styles.titleStyle}>MAPS</Text>
  };
};

const Loginscreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <SliderTile
        animationDuration={2000}
      />
      {_renderTitle(props.sliderAnimationRunning)}

    </View>
  );
};

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: GLOBALS.COLORS.PURPLE
  },
  titleStyle: {
    fontSize: 55,
    color: 'white',
    position: 'absolute',
    top: screenHeight*.32,
    left: screenWidth*.6
  }
};

const mapStateToProps = state => {
  return {
      sliderAnimationRunning: state.login.sliderAnimationRunning
  };
};

export default connect(mapStateToProps)(Loginscreen);
