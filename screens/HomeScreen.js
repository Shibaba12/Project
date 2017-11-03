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
  FlatList,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';
import * as firebase from 'firebase';

// Importing Menu Item components that we have created
import HomeButton from '../components/HomeButton';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   title: "Body Center"
  };

  handleClick(Item) {
    this.props.navigation.navigate(Item, {key: '0'})
  }
  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/bg.jpg')} style={styles.backgroundImage}/>
        <HomeButton handleClick={this.handleClick.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  },


});
