import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import PlanScreen from '../screens/PlanScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Plans: {
      screen: PlanScreen,
    },
    Profile:{
      screen: ProfileScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `md-home`,
            label = 'home'             
            break;
          case 'Plans':
            iconName = `md-paper`,
            label = 'home'
            break;
          case 'Profile':
            iconName = `md-person`,
            label = 'home';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        let label;
        switch (routeName) {
          case 'Home':
            label = 'Home'             
            break;
          case 'Plans':
            label = 'Plan'
            break;
          case 'Profile':
            label = 'Me';
        }
        return (
         label
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
