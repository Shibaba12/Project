import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SingleExerciseScreen from'../screens/SingleExerciseScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import EquipmentScreen from '../screens/EquipmentScreen';
import SingleEpScreen from '../screens/SingleEpScreen';
import TrainerScreen from '../screens/TrainerScreen';
import ExerciseScreen from'../screens/ExerciseScreen';
import SingleTrainerScreen from '../screens/SingleTrainerScreen';
import ProgramScreen from '../screens/ProgramScreen';
import TimetableScreen from '../screens/TimetableScreen';
import NewScreen from '../screens/NewScreen';
import MapScreen from '../screens/MapScreen'

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    SingleExercise: {
      screen: SingleExerciseScreen
    },
    ExerciseScreen: {
      screen: ExerciseScreen
    },
    EquipmentScreen: {
      screen: EquipmentScreen
    },
    SingleEquipment: {
      screen: SingleEpScreen
    },//add new screen here for navigation!!
    TrainerScreen:{
      screen: TrainerScreen
    },
    SingleTrainer:{
      screen: SingleTrainerScreen
    },
    ProgramScreen: {
      screen: ProgramScreen
    },
    TimetableScreen: {
      screen: TimetableScreen
    },
    NewScreen: {
      screen: NewScreen
    },
    MapScreen: {
      screen: MapScreen
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
