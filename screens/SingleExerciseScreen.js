import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Layout from '../constants/Layout';

export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
    title:"This is Exercise"
  };

  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView > 
          <Text style={{fontSize:24, fontWeight:'500'}}> {params.name}Exercise</Text>   
          <Text style={{fontSize:24, fontWeight:'500'}}> {params.description}Exercise</Text>       
      </ScrollView> 
    );
  }
}

