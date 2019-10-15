import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from '../hamburger/HamburgerNavigator';
import Login from '../login/Login';
import Loading from './Loading';

const RootNavigatorStack = createSwitchNavigator({
  // Loading,
  // Login,
  Main: { screen: DrawerNavigator }
});

const RootNavigator = createAppContainer(RootNavigatorStack);

export default RootNavigator;
