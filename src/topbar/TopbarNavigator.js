import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import NavbarNavigator from '../navbar/NavbarNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopbarNavigator = createStackNavigator(
  {
    NavbarNavigator
  },
  {
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
        // remove default header in Home => replaced by podcastNavigator header
        header: routeName === 'Home' ? null : 0,

        headerTitle: (
          <Text style={{ fontFamily: 'Roboto-medium', fontSize: 20 }}>
            {routeName}
          </Text>
        )
      };
    }
  }
);

export default TopbarNavigator;
