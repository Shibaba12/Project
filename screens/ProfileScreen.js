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
  TextInput,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';
import * as firebase from 'firebase';

export default class ExerciseScreen extends React.Component {
    static navigationOptions = {
        title: "Me",
        
      };
      handlePress() {
        console.log('1234567');
      }
      constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          user: 'nouser',
          initialMessage: '',
          feedback: '',
          name: '',
          uid: '',
          details: {name: null, weight: null, height: null}
        }
      }
    
      componentDidMount() {
       
        
        Database.authState((user) => {
          if (user !== null) {
          this.setState({uid: user.uid}, () =>{
            Database.getUserData(this.state.uid, (details) => {
              this.setState({
                details: details
              })
            });
          })}
        })
    
      }
    
      sendFeedback(){
        Database.sendFeedback(this.state.feedback);
      }
    
      logout() {
        Database.logout();
      }

  render() {
    return (
      <ScrollView>
            <Text>PRO SCREEN</Text>
            <Button
        title="Log out"
        onPress={() => {this.logout()}}/>
        <Button
          title="Log user Details"
          onPress={() => {console.log(this.state.details)}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(feedback) => this.setState({feedback})}
            value={this.state.feedback}
          />
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });