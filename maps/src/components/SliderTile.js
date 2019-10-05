import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions
} from 'react-native';
import GLOBALS from './../Globals';
import {connect} from 'react-redux';
import {finishedAnimatingSlider} from './../actions';

class SliderTile extends Component {
  constructor () {
    super();
    this.yPos = new Animated.Value(0);
  }
  componentDidMount() {
    this.moveUp();
  }
  moveUp() {
    this.yPos.setValue(0)
    Animated.timing(
      this.yPos,
      {
        toValue: 1,
        duration: this.props.animationDuration
      }
    ).start(() => this.props.finishedAnimatingSlider())
  }

  render() {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    const pos = this.yPos.interpolate({
      inputRange: [0,1],
      outputRange: [screenHeight, screenHeight * .2]
    });

    return (
      <View style={styles.viewStyle}>
        <Animated.View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: Math.round(Dimensions.get('window').width),
            borderRightWidth: 0,
            borderBottomWidth: Math.round(Dimensions.get('window').height) * .2,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: GLOBALS.COLORS.DARK_PURPLE,
            transform: [{translateY: pos}]
          }}
        />
        <Animated.View
          style={{
            height: Math.round(Dimensions.get('window').height) * .8,
            backgroundColor: GLOBALS.COLORS.DARK_PURPLE,
            transform: [{translateY: pos}]
          }}
        />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0
  },
  textStyle: {
    color: 'white',
    fontSize: 55
  },
  sliderBottom: {
    height: Math.round(Dimensions.get('window').height) * .8,
    backgroundColor: GLOBALS.COLORS.DARK_PURPLE
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: Math.round(Dimensions.get('window').width),
    borderRightWidth: 0,
    borderBottomWidth: Math.round(Dimensions.get('window').height) * .2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: GLOBALS.COLORS.DARK_PURPLE
  }
};

const mapStateToProps = state => {
  return {
    sliderAnimationRunning: state.login.sliderAnimationRunning
  };
};

export default connect(mapStateToProps, {finishedAnimatingSlider})(SliderTile);
