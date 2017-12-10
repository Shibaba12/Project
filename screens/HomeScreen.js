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
      <View style={{flex: 3,justifyContent: 'center',alignItems: 'center'}}  >
        <Image source={require('../assets/images/bg.jpg')} style={styles.backgroundImage}/>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/pLogo.png')}/>
          </View>
          <View style={styles.textCont}>
            <Text style={styles.title}>There are about 10 people in the gym, not too bad !</Text>                       
          </View>
        </View>
        <HomeButton handleClick={this.handleClick.bind(this)}/>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'rgba(0, 0, 0,0.3)', 
    elevation: 1,
    alignItems: 'center',      
  },
  backgroundImage:{
    flex: 3,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  },
  textCont: {
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    padding: 8,
  },
  image: {
    
    width: 80,
    height: 110,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: '#F2C94C'
  },
});
