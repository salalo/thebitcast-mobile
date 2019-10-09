import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import Login from '../../scenes/Login';

const RootNavigatorStack = createSwitchNavigator({
  // Loading,
  Login,
  Main: { screen: DrawerNavigator }
});

const RootNavigator = createAppContainer(RootNavigatorStack);

export default RootNavigator;
