import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PodcastNavigator from './podcast/PodcastNavigator';
import Categories from './Categories';
import Following from './Following';
import Bookmarks from './Bookmarks';
import Search from './Search';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RouteConfigs = {
  Home: {
    screen: PodcastNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'home'} size={24} style={{ color: tintColor }} />
      )
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'apps'} size={24} style={{ color: tintColor }} />
      )
    }
  },
  Following: {
    screen: Following,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'favorite'} size={24} style={{ color: tintColor }} />
      )
    }
  },
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'bookmark'} size={24} style={{ color: tintColor }} />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'search'} size={24} style={{ color: tintColor }} />
      )
    }
  }
};

const NavbarNavigatorConfig = {
  initialRouteName: 'Home',
  lazy: false,
  activeColor: '#F44336',
  inactiveColor: '#252525',
  barStyle: { backgroundColor: '#ffffff' },
  tabBarOptions: {
    activeTintColor: '#F44336',
    inactiveTintColor: '#252525'
  }
};

// createMaterialBottomTabNavigator is slow af
const NavbarNavigator = createBottomTabNavigator(
  RouteConfigs,
  NavbarNavigatorConfig
);

export default NavbarNavigator;
