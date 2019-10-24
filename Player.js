import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

export default class Player extends Component {
  componentDidMount() {
    try {
      SoundPlayer.playUrl(
        'http://hwcdn.libsyn.com/p/f/e/4/fe4ed799ba71d9a7/KATG-2019-10-23.mp3?c_id=55757081&cs_id=55757081&expiration=1571956085&hwt=57d512ee158b9a0555f363d146d07130',
      );
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }
  render() {
    return (
      <View>
        <Text>asd</Text>
      </View>
    );
  }
}
