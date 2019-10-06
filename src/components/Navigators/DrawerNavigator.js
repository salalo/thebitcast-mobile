import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TopbarNavigator from './TopbarNavigator';
import HamburgerForm from '../Hamburger/HamburgerForm';

const DrawerNavigator = createDrawerNavigator(
  {
    TopbarNavigator
  },
  {
    contentComponent: HamburgerForm,
    drawerWidth: Dimensions.get('window').width * 0.7,
    edgeWidth: Dimensions.get('window').width * 0.5
  }
);

export default DrawerNavigator;
