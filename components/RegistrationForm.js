import React, { Component } from 'react';
import { 
  Modal, 
  Text, 
  TouchableHighlight, 
  View, 
  Button, 
  TextInput, 
  StyleSheet,
  KeyboardAvoidingView,
  Image } from 'react-native';
import Database from '../api/database';
import * as firebase from 'firebase';

class RegistrationForm extends Component {

    componentDidMount() {
        Database.getExercises( (exercises) => {
          this.setState({
            exercises: exercises
          })
        });
        
        /* We have to set interval here, because Firebase currentUser property is not initialized yet */
        let timeout = setInterval(() => {
          if (firebase.auth().currentUser !== null) {
            clearInterval(timeout);
            let uid = firebase.auth().currentUser.uid;
            this.setState({uid})
          }
    
        }, 500)
      }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async register() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            await Database.addUserData(this.state.name, this.state.weight, this.state.height); 
            console.log("account Created")
            } catch (error) {
            console.log(error)
        }
}

  render() {
    return (  
      <View >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <View style={styles.header}>
              <Image style={styles.image} source={require('../assets/images/logo.jpg')}/>   
            </View>
            <View style={styles.content}>            
              <Text style={{fontSize: 25, textAlign: 'center'}}>Enter your Details</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder={'Email'}
              />
              <TextInput
                secureTextEntry
                style={styles.inputStyle}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder={'Password'}
              />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                placeholder={'Name'}
              />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(weight) => this.setState({weight})}
                value={this.state.weight}
                placeholder={'Weight'}
              />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(height) => this.setState({height})}
                value={this.state.height}
                placeholder={'Height'}
              />          
              <Button
                title="Register"
                onPress={() => {this.register()}}/>
              <Button
                title="Cancel"
                onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        
        <Button
        title="Sign up now"
        onPress={() => {
          this.setModalVisible(true)
        }}/>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
     
     alignItems: 'center',
     justifyContent: 'center',
     flex: 0.5
  },
  image: {
    height: 70,
    resizeMode: 'contain'
  },
  content: {
     justifyContent: 'space-between', 
     alignItems: 'center',
     flex: 1
  },
  inputStyle:{
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1  ,
    borderRadius: 25,
 },
});

export default RegistrationForm;