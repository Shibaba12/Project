import React from 'react';
import {
  Image,
  ScrollView,
  View,
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
        <View>
            <ScrollView horizontal>          
                <Image
                source={require('../assets/images/time.jpg')}
                style={{ height: 371, flex: 1, width: 862 }}
                />             
            </ScrollView>
        </View>
    );
  }
}

  
