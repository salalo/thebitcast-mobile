import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/scenes/Home';
import Categories from './src/scenes/Categories';
import Following from './src/scenes/Following';
import Bookmarks from './src/scenes/Bookmarks';
import Search from './src/scenes/Search';

const navStack = createStackNavigator({
  Home: { screen: Home },
  Categories: { screen: Categories },
  Following: { screen: Following },
  Bookmarks: { screen: Bookmarks },
  Search: { screen: Search }
});

const AppNavigator = createAppContainer(navStack);

export default AppNavigator;
