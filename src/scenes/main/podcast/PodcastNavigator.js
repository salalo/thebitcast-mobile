import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import Home from '../Home';
import Podcast from './Podcast';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PodcastNavigator = createStackNavigator(
  {
    Home,
    Podcast
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name={navigation.state.routeName === 'Home' ? 'menu' : 'arrow-back'}
            size={24}
            color={'#252525'}
            style={{ margin: 0, padding: 16 }}
            onPress={
              navigation.state.routeName === 'Home'
                ? () => navigation.openDrawer()
                : () => navigation.goBack()
            }
          />
        ),

        headerTitle: (
          <Text style={{ fontFamily: 'Roboto-medium', fontSize: 20 }}>
            {navigation.state.routeName}
          </Text>
        )
      };
    }
  }
);

export default withNavigation(PodcastNavigator);
