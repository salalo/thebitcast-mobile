import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  },

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
