import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const playerItems = [
  { key: 'time-mul', icon: 'timer', method: 'showTimeMul' },
  { key: 'back-10s', icon: 'replay-10', method: 'back10Sec' },
  {
    key: 'play-pause',
    icon: 'pause',
    method: 'togglePause'
  },
  {
    key: 'forward-10s',
    icon: 'forward-10',
    method: 'forward10Sec'
  },
  {
    key: 'expand',
    icon: 'keyboard-arrow-up',
    method: 'expandPlayer'
  }
];

export default PodcastPlayer = () => {
  return (
    <Container>
      <Timeline />
      <PlayerIcons>
        {playerItems.map(item => (
          <PlayerBtn key={'btn__' + item.key}>
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
};

const Container = styled.View`
  position: absolute;
  bottom: -1;
  z-index: 2;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  elevation: 5;
`;
const PlayerIcons = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const PlayerBtn = styled.TouchableOpacity`
  height: 100%;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;
const Timeline = styled.View`
  background-color: ${({ theme }) => theme.color.main};
  height: 2px;
  width: 40%;
`;
