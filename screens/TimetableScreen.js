import React from 'react';
import {
  Image,
  ScrollView,
} from 'react-native';
import Layout from '../constants/Layout';

// Importing Menu Item components that we have created

export default class TimetableScreen extends React.Component {
  static navigationOptions = {
   title: "Timetable"
  }; 

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>           

      <Image source={require('../assets/images/timetable.png')} />
             
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});