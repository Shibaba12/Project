import React, { Component } from 'react';
import {
  Image,
  Platform,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import Layout from '../constants/Layout';
import Database from '../api/database';
import * as firebase from 'firebase';

class Feedback extends Component {

  constructor(props){
    super(props);
    this.state = {
      initialMessage: '',
      feedback: '',
      
    }
  }

  state = {
    modalVisible: false,
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  sendFeedback(){
    Database.sendFeedback(this.state.feedback);
  }

  render() {
    return ( 
      <View>
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
              <Text style={{fontSize: 25, textAlign: 'center'}}>Please tell us!</Text>
              <TextInput
                style={styles.inputStyle}                
                onChangeText={(feedback) => this.setState({feedback})}
                value={this.state.feedback}
              />
              <Button title="Send feedback" onPress={() => {this.sendFeedback()}}/>
              <Button title="Cancel" onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
            </View>
          </KeyboardAvoidingView>
        </Modal>

          <TouchableOpacity 
            onPress={() => {
            this.setModalVisible(true)
          }}>         
            <Image source={require('../assets/images/feedback.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity> 
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
    justifyContent: 'space-around', 
    alignItems: 'center',
    flex: 1
  }, 
  
  inputStyle:{
    height: 200,
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
  
export default Feedback;