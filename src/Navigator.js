import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './scenes/Home';
import Categories from './scenes/Categories';
import Following from './scenes/Following';
import Bookmarks from './scenes/Bookmarks';
import Search from './scenes/Search';

const RouteConfigs = {
  Home: { screen: Home },
  Categories: { screen: Categories },
  Following: { screen: Following },
  Bookmarks: { screen: Bookmarks },
  Search: { screen: Search },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const navStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);
const Navigator = createAppContainer(navStack);

export default Navigator;
