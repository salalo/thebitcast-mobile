import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import NavbarNavigator from './NavbarNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopbarNavigator = createStackNavigator(
  {
    NavbarNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name={'menu'}
            size={24}
            color={'#252525'}
            style={{ margin: 0, padding: 16 }}
            onPress={navigation.openDrawer}
          />
        )
      };
    },
    navigationOptions: {
      header: navigation => ({
        titleStyle: {
          color: 'red'
        },
        tintColor: '#0087B7',
        titleStyle: {
          color: 'red'
        }
      })
      // header: {
      //   style: { backgroundColor: 'red' },
      //   titleStyle: { color: 'green' }
      // }
    }
  }
);

export default TopbarNavigator;
