import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import Home from '../../scenes/Home';
import Categories from '../../scenes/Categories';
import Following from '../../scenes/Following';
import Bookmarks from '../../scenes/Bookmarks';
import Search from '../../scenes/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'home'} size={24} style={{ color: tintColor }} />
      ),
    },
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'apps'} size={24} style={{ color: tintColor }} />
      ),
    },
  },
  Following: {
    screen: Following,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'favorite'} size={24} style={{ color: tintColor }} />
      ),
    },
  },
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'bookmark'} size={24} style={{ color: tintColor }} />
      ),
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'search'} size={24} style={{ color: tintColor }} />
      ),
    },
  },
};

const navbarStack = createMaterialBottomTabNavigator(RouteConfigs, {
  initialRouteName: 'Home',
  activeColor: '#F44336',
  inactiveColor: '#252525',
  barStyle: { backgroundColor: '#ffffff' },
});

const Navbar = createAppContainer(navbarStack);

export default Navbar;
