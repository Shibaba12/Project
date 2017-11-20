import React, { Component } from 'react';
import { 
  Modal, 
  Text, 
  TouchableHighlight, 
  View, 
  Button, 
  TextInput,
  StyleSheet
 } from 'react-native';
import Database from '../api/database';

class LogInForm extends Component {

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
      <View style={{marginTop: 22}}>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22, justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View>            
              <Text style={{fontSize: 25, textAlign: 'center'}}>Welcome to Body Center</Text>
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
                 style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                 onChangeText={(password) => this.setState({password})}
                 value={this.state.password}
                 placeholder={'Password'}
              />
                       
              <Button style={styles.buttonStyle}
                 title="Log in"
                 onPress={() => {this.login()}}
              />
              <Button style={styles.buttonStyle}
                 title="Cancel"
                 onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
              />
              <View style={styles.footer}>
                <View style={styles.textRow}>
                  <Text Type='primary3'>Don’t have an account?</Text>
                  <Button Type='clear' onPress={() => this.props.navigation.navigate('RegistrationForm')}>
                    <Text Type='header6'> Sign up now </Text>
                  </Button>
                </View>
              </View>

            </View>
          </View>
        </Modal>

        <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true)
        }}
        style={{width: 50, height: 50, borderRadius: 100, backgroundColor: '#2e9cdb', justifyContent: 'center', }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Log In</Text>
        </TouchableHighlight>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,   
  },
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeght: 23,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {}

});

export default LogInForm;