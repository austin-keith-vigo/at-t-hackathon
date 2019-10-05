import React, {Component} from 'react';
import {Text, Animated} from 'react-native';
import {connect} from 'react-redux';
import {finishedAnimatingTitle} from './../actions';

import GLOBALS from './../Globals';

class FadeInTitle extends Component {
  constructor(props){
    super(props);
    this.opacityVal = new Animated.Value(0);
  }
  componentDidMount(){
    this.fadeIn();
  }
  fadeIn(){
    this.opacityVal.setValue(0);
    Animated.timing(
      this.opacityVal,
      {
        toValue: 1,
        duration: this.props.animationDuration
      }
    ).start(() => this.props.finishedAnimatingTitle(this.props.navigation));
  }

  render(){
    return (
      <Animated.Text
        style={{
          fontSize: 55,
          color: 'white',
          position: 'absolute',
          color: 'white',
          opacity: this.opacityVal,
          top: GLOBALS.SCREEN_HEIGHT * .3,
          left: GLOBALS.SCREEN_WIDTH * .6
        }}
      >
        {this.props.title}
      </Animated.Text>
    );
  }
}

const mapStateToProps = state => {
  return {
    animatingTitle: state.login.animatingTitle
  };
};

export default connect(mapStateToProps, {finishedAnimatingTitle})(FadeInTitle);
