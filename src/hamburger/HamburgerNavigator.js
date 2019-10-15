import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TopbarNavigator from '../topbar/TopbarNavigator';
import Hamburger from './Hamburger';

const DrawerNavigator = createDrawerNavigator(
  {
    TopbarNavigator
  },
  {
    contentComponent: Hamburger,
    drawerWidth: Dimensions.get('window').width * 0.7,
    edgeWidth: Dimensions.get('window').width * 0.25
  }
);

export default DrawerNavigator;
