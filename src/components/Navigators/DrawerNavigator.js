import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TopbarNavigator from './TopbarNavigator';

const DrawerNavigator = createDrawerNavigator(
  {
    TopbarNavigator
  },
  {
    drawerWidth: Dimensions.get('window').width * 0.7,
    edgeWidth: Dimensions.get('window').width * 0.5,
    hideStatusBar: false
  }
);

export default DrawerNavigator;
