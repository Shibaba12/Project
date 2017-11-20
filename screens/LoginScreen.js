import React from 'react';
import {
  Modal, 
  Text, 
  TouchableHighlight, 
  View, 
  Button, 
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView
  
} from 'react-native';

import Database from '../api/database';
import RegistrationForm from '../components/RegistrationForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  login() {
    Database.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View style={styles.header}>
          <Image style={styles.image} source={require('../assets/images/logo.jpg')}/>   
          <Text Type='light h1'>Welcome to Body Center</Text>
        </View>

        <View style={styles.content}>
          <View>                                      
            <TextInput
                 Type='rounded'
                 style={styles.inputStyle}
                 onChangeText={(email) => this.setState({email})}
                 value={this.state.email}
                 placeholder={'Email'}
            />
            <TextInput
                 secureTextEntry
                 Type='rounded'
                 style={styles.inputStyle}
                 onChangeText={(password) => this.setState({password})}
                 value={this.state.password}
                 placeholder={'Password'}
            />                       
            <Button style={styles.buttonStyle}
                 title="Log in"
                 onPress={() => {this.login()}}
            />
          </View>
         
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text Type='primary3'>Don’t have an account?</Text><RegistrationForm/>              
            </View>
          </View>
          
        
      </View>
      <View style={{ height: 80 }} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 77,
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {},

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 5,
    marginRight: 5, 
    
  },
inputStyle:{
  height: 50,
  backgroundColor: '#fff',
  marginHorizontal: 10,
  marginVertical: 5,
 // paddingVertical: 5,
  // paddingHorizontal: 15,
  width: window.width -10,
  borderColor: '#ccc',
  borderWidth: 1  ,
  borderRadius: 25,
}
});