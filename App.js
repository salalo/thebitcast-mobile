import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MasterStyle from './src/assets/styles/MasterStyle';
import styled from 'styled-components';
import Navigator from './src/Navigator';
import { store } from './src/store';

const GlobalStyle = styled.View`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto-thin': require('./src/assets/fonts/Roboto-Thin.ttf'),
      'Roboto-light': require('./src/assets/fonts/Roboto-Light.ttf'),
      'Roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-black': require('./src/assets/fonts/Roboto-Black.ttf'),

      Turret: require('./src/assets/fonts/TurretRoad-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <MasterStyle>
          <GlobalStyle>
            <AppLoading />
          </GlobalStyle>
        </MasterStyle>
      );
    }
    return (
      <MasterStyle>
        <GlobalStyle>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </GlobalStyle>
      </MasterStyle>
    );
  }
}

export default App;
