import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import LogInForm from '../components/LogInForm';
import RegistrationForm from '../components/RegistrationForm';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require('../assets/images/bg.jpg')} style={styles.backgroundImage}/>
        <Text style={{fontSize: 30, textAlign: 'center', backgroundColor: 'transparent', color: 'white',}}>Welcome to Body Center</Text>

        <LogInForm />
        <RegistrationForm />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',   
},
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  }

});
