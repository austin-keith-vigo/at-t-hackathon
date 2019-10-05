import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';

//Components
import {SliderTile, FadeInTitle} from './../components';

const _renderTitle = (sliderAnimationRunning, navigation) => {
  if(!sliderAnimationRunning){
    return (
      <FadeInTitle
        title="Maps"
        animationDuration={1000}
        navigation={navigation}
      />
    );
  };
};

const _renderButton = (animatingTitle, navigation) => {
  if(!animatingTitle){
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <View
          style={styles.buttonViewStyle}
        >
          <Text style={styles.buttonTextStyle}>Let's Go ></Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const _onButtonPressed = (navigation) => {
  navigation.navigate('Home');
};
const Loginscreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <SliderTile
        animationDuration={2000}
      />
      {_renderTitle(props.sliderAnimationRunning, props.navigation)}
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
  },
  buttonViewStyle: {
    backgroundColor: 'white',
    height: '23%',
    width: '50%',
    top: GLOBALS.SCREEN_HEIGHT * .7,
    left: GLOBALS.SCREEN_WIDTH * .25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    fontSize: 30,
    color: 'black'
  }
};

const mapStateToProps = state => {
  return {
      sliderAnimationRunning: state.login.sliderAnimationRunning,
      animatingTitle: state.login.animatingTitle
  };
};

export default connect(mapStateToProps)(Loginscreen);
