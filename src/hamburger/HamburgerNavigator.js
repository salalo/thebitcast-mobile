import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TopbarNavigator from '../topbar/TopbarNavigator';
import HamburgerForm from './HamburgerForm';

const DrawerNavigator = createDrawerNavigator(
  {
    TopbarNavigator
  },
  {
    contentComponent: HamburgerForm,
    drawerWidth: Dimensions.get('window').width * 0.7,
    edgeWidth: Dimensions.get('window').width * 0.25
  }
);

export default DrawerNavigator;
