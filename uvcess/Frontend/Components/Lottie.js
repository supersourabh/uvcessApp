import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={ { backgroundColor: "#88d495" } }>
        <LottieView
          loop
          autoPlay
          ref={ animation => {
            this.animation = animation;
          } }
          style={ {
            width: 500,
            height: 400,
            backgroundColor: '#ccf3cc',
          } }
          source={ require('../lottieFiles/60820-bicycle-riding.json') }
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      </View>
    );
  }
}