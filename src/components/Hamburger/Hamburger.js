import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import HamburgerForm from './HamburgerForm';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    elevation: 5,
    marginTop:
      (Platform.OS === 'android' ? 24 : 0) || (Platform.OS === 'ios' ? 18 : 0),
  },
  RightInner: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height,
    backgroundColor: '#000000',
  },
});

const Hamburger = ({ isOpen, toggleHamburger }) => {
  const [slideHamburger] = useState(
    new Animated.Value(isOpen ? -Dimensions.get('window').width : 0),
  );
  useEffect(() => {
    Animated.timing(slideHamburger, {
      toValue: isOpen ? 0 : -Dimensions.get('window').width,
      easing: Easing.inOut(Easing.quad),
      duration: 250,
    }).start();
  });

  const [fadeRightInner] = useState(new Animated.Value(isOpen ? 0 : 0.24));
  useEffect(() => {
    Animated.timing(fadeRightInner, {
      toValue: isOpen ? 0.24 : 0,
      easing: Easing.linear,
      duration: isOpen ? 200 : 0,
      delay: isOpen ? 250 : 0,
    }).start();
  });

  console.log(isOpen, Dimensions.get('window').width);

  return (
    //       <PanGestureHandler
    //         maxpointers={1}
    //         onGestureEvent={this.props.toggleHamburger}>
    <Animated.View
      style={[
        styles.Container,
        {
          transform: [
            {
              translateX: slideHamburger,
            },
          ],
        },
      ]}>
      <HamburgerForm />
      {/* toggleHamburger changes bool value of isOpen */}
      <TouchableOpacity onPress={toggleHamburger}>
        <Animated.View
          style={[styles.RightInner, { opacity: fadeRightInner }]}
        />
      </TouchableOpacity>
    </Animated.View>
    //       </PanGestureHandler>
  );
};

export default Hamburger;
