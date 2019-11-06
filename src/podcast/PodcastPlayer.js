import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from 'react-native-slider';
import Pplayer from 'react-native-sound-player';
import moment from 'moment';

export default class PodcastPlayer extends Component {
  // executes unmount func from parent
  destroySelf() {
    this.props.unmountSelf();
  }

  state = {
    playerExpanded: false,
    timeMulExpanded: false,
    podcastPlaying: false,
    podcastCurrentTime: 0,
    podcastMaxTime: 0,
    podcastMul: 1,
  };

  showTimeMul = () => {
    this.setState({ timeMulExpanded: !this.state.timeMulExpanded });
    this.setState({ playerExpanded: false });
  };

  forward10Sec = () => {
    try {
      Pplayer.seek(this.state.podcastCurrentTime / 1000 + 10);
    } catch (e) {
      console.log('Couldnt skip 10s', e);
    }
  };

  back10Sec = () => {
    try {
      Pplayer.seek(this.state.podcastCurrentTime / 1000 - 10);
    } catch (e) {
      console.log('Couldnt skip 10s', e);
    }
  };

  changePodcastCurrentTime = time => {
    try {
      Pplayer.seek(this.state.podcastCurrentTime / 1000);
    } catch (e) {
      console.log('Couldnt change the time', e);
    }
  };

  changePodcastCurrentMul = mul => {
    // react-native-sound-player lib does not support speed config
  };

  togglePause = () => {
    try {
      if (this.state.podcastPlaying) Pplayer.pause();
      else Pplayer.resume();
      this.setState({ podcastPlaying: !this.state.podcastPlaying });
    } catch (e) {
      console.log('Couldnt pause the podcast', e);
    }
  };

  togglePlayerExpansion = () => {
    this.setState({ playerExpanded: !this.state.playerExpanded });
    this.setState({ timeMulExpanded: false });
  };

  async componentDidMount() {
    console.log(this.props.podcastRSS);
    try {
      if (!this.state.podcastPlaying) {
        Pplayer.playUrl(
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        );
        this.setState({ podcastPlaying: true });
        clearInterval(0);
      }
      const podcastInfo = await Pplayer.getInfo();
      this.setState({ podcastMaxTime: podcastInfo.duration * 1000 });

      if (this.state.podcastPlaying) {
        // enables live scroll update every .5sec
        const intervalID = setInterval(async () => {
          const podcastInfo = await Pplayer.getInfo();
          //           console.log(podcastInfo.currentTime);
          //           console.log(podcastInfo.currentTime);

          if (podcastInfo.currentTime >= podcastInfo.duration) {
            clearInterval(intervalID);
            this.destroySelf();
          }
          this.setState({ podcastCurrentTime: podcastInfo.currentTime * 1000 });
        }, 500);
      }
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    Pplayer.stop();
  }

  render() {
    const playerItems = [
      { key: 'time-mul', icon: 'timer', method: this.showTimeMul },
      { key: 'back-10s', icon: 'replay-10', method: this.back10Sec },
      {
        key: 'play-pause',
        icon: this.state.podcastPlaying ? 'pause' : 'play-arrow',
        method: this.togglePause,
      },
      {
        key: 'forward-10s',
        icon: 'forward-10',
        method: this.forward10Sec,
      },
      {
        key: 'expand',
        icon: this.state.playerExpanded
          ? 'keyboard-arrow-down'
          : 'keyboard-arrow-up',
        method: this.togglePlayerExpansion,
      },
    ];

    return (
      <Container
        style={{
          height:
            this.state.playerExpanded || this.state.timeMulExpanded ? 100 : 48,
        }}>
        {this.state.playerExpanded ? (
          <SliderContainer>
            <SliderTime>
              {moment(this.state.podcastCurrentTime).format('mm:ss')}
            </SliderTime>
            <Slider
              value={this.state.podcastCurrentTime}
              maximumValue={this.state.podcastMaxTime}
              thumbTintColor="#F44336"
              minimumTrackTintColor="#F44336"
              maximumTrackTintColor="#ECECEC"
              style={{
                width: Dimensions.get('window').width * 0.7,
              }}
              trackStyle={{ height: 2 }}
              thumbStyle={{ width: 14, height: 14 }}
              onValueChange={val => this.setState({ podcastCurrentTime: val })}
              onSlidingComplete={val => this.changePodcastCurrentTime(val)}
            />
            <SliderTime>
              {moment(this.state.podcastMaxTime).format('mm:ss')}
            </SliderTime>
          </SliderContainer>
        ) : this.state.timeMulExpanded ? (
          // time multiplier slider
          <SliderContainer>
            <SliderMulText>{this.state.podcastMul}</SliderMulText>
            <Slider
              value={this.state.podcastMul}
              minimumValue={0.25}
              maximumValue={2}
              step={0.25}
              thumbTintColor="#F44336"
              minimumTrackTintColor="#F44336"
              maximumTrackTintColor="#ECECEC"
              style={{
                backgroundColor: 'rgba(0,0,0,0)',
                width: Dimensions.get('window').width * 0.8,
              }}
              trackStyle={{ height: 2 }}
              thumbStyle={{ width: 14, height: 14 }}
              onValueChange={val => this.setState({ podcastMul: val })}
              onSlidingComplete={val => this.changePodcastCurrentMul(val)}
            />
          </SliderContainer>
        ) : (
          <Slider
            value={this.state.podcastCurrentTime}
            maximumValue={this.state.podcastMaxTime}
            thumbTintColor="rgba(0,0,0,0)"
            minimumTrackTintColor="#F44336"
            maximumTrackTintColor="rgba(0,0,0,0)"
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              width: Dimensions.get('window').width,
              position: 'absolute',
              bottom: 27,
            }}
            trackStyle={{ height: 2 }}
            thumbStyle={{ width: 14, height: 14 }}
          />
        )}

        <PlayerIcons>
          {playerItems.map(item => (
            <PlayerBtn key={'btn__' + item.key} onPress={() => item.method()}>
              <Icon
                name={item.icon}
                color={'#252525'}
                size={item.key === 'play-pause' ? 36 : 26}
                key={'icon__' + item.key}
              />
            </PlayerBtn>
          ))}
        </PlayerIcons>
      </Container>
    );
  }
}

const Container = styled.View`
  position: absolute;
  bottom: -1;
  z-index: 2;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  elevation: 5;
`;
const PlayerIcons = styled.View`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  margin-top: auto;
`;
const PlayerBtn = styled.TouchableOpacity`
  height: 100%;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SliderContainer = styled.View`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const SliderTime = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-regular';
  color: ${({ theme }) => theme.color.black};
`;
const SliderMulText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-regular';
  color: ${({ theme }) => theme.color.black};
`;
