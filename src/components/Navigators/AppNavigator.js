import React from 'react';
import { Text, Dimensions } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../../scenes/Home';
import Categories from '../../scenes/Categories';
import Following from '../../scenes/Following';
import Bookmarks from '../../scenes/Bookmarks';
import Search from '../../scenes/Search';
import Podcast from '../../scenes/Podcast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HamburgerForm from '../Hamburger/HamburgerForm';

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

const TopbarNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerLeft: (
        <Icon
          name={'menu'}
          size={24}
          color={'#252525'}
          style={{ margin: 0, padding: 16 }}
          onPress={navigation.openDrawer}
        />
      ),

      headerTitle: (
        <Text style={{ fontFamily: 'Roboto-medium', fontSize: 20 }}>
          {routeName}
        </Text>
      )
    };
  }
};

const PodcastTopbarNavigatorConfig = {
  defaultNavigationOptions: {
    header: null
  }
};

const DrawerNavigatorConfig = {
  contentComponent: HamburgerForm,
  drawerWidth: Dimensions.get('window').width * 0.7,
  edgeWidth: Dimensions.get('window').width * 0.25
};

const AppSwitchNavigator = createAppContainer(
  createSwitchNavigator({
    mainFlow: {
      screen: createDrawerNavigator(
        {
          screen: createStackNavigator(
            {
              screen: createBottomTabNavigator(
                {
                  Home: {
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon
                          name={'home'}
                          size={24}
                          style={{ color: tintColor }}
                        />
                      )
                    },
                    screen: createStackNavigator(
                      {
                        Home,
                        Podcast
                      },
                      PodcastTopbarNavigatorConfig
                    )
                  },
                  Categories: {
                    screen: Categories,
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon
                          name={'apps'}
                          size={24}
                          style={{ color: tintColor }}
                        />
                      )
                    }
                  },
                  Following: {
                    screen: Following,
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon
                          name={'favorite'}
                          size={24}
                          style={{ color: tintColor }}
                        />
                      )
                    }
                  },
                  Bookmarks: {
                    screen: Bookmarks,
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon
                          name={'bookmark'}
                          size={24}
                          style={{ color: tintColor }}
                        />
                      )
                    }
                  },
                  Search: {
                    screen: Search,
                    navigationOptions: {
                      tabBarIcon: ({ tintColor }) => (
                        <Icon
                          name={'search'}
                          size={24}
                          style={{ color: tintColor }}
                        />
                      )
                    }
                  }
                },
                NavbarNavigatorConfig
              )
            },
            TopbarNavigatorConfig
          )
        },
        DrawerNavigatorConfig
      )
    }
  })
);

export default AppSwitchNavigator;
