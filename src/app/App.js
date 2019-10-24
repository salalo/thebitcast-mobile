import React, {Component} from 'react';
// import * as Font from 'expo-font';
import styled from 'styled-components';
import Amplify from 'aws-amplify';
import {Provider} from 'react-redux';
import MasterStyle from '../assets/styles/MasterStyle';
import Navigator from './Navigator';
import Splash from './Splash';
import store from './store';
import awsmobile from '../../aws-exports';

const GlobalStyle = styled.View`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`;

export default class App extends Component {
  // constructor(props) {
  // super(props);
  // this.state = {fontLoaded: false};
  // }

  componentDidMount() {
    //     await Font.loadAsync({
    //       'Roboto-thin': require('../assets/fonts/Roboto-Thin.ttf'),
    //       'Roboto-light': require('../assets/fonts/Roboto-Light.ttf'),
    //       'Roboto-light-italic': require('../assets/fonts/Roboto-LightItalic.ttf'),
    //       'Roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    //       'Roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
    //       'Roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
    //       'Roboto-black': require('../assets/fonts/Roboto-Black.ttf'),
    //
    //       Turret: require('../assets/fonts/TurretRoad-Regular.ttf')
    //     });

    Amplify.configure(awsmobile);
    // this.setState({fontLoaded: true});
  }
  render() {
    // if (!this.state.fontLoaded) {
    //   return <Splash />;
    // }
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
