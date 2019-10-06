import React from 'react';
import { Text } from 'react-native';
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
    }
  }
);

export default TopbarNavigator;
