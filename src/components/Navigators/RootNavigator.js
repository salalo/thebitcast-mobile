import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

const RootNavigatorStack = createSwitchNavigator({
  // Loading,
  // Login,
  Main: { screen: DrawerNavigator }
});

const RootNavigator = createAppContainer(RootNavigatorStack);

export default RootNavigator;
