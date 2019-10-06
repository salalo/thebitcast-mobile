import { createAppContainer } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

const RootNavigator = createAppContainer(DrawerNavigator);

export default RootNavigator;
