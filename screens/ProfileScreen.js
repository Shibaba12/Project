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

export default class ProfileScreen extends React.Component {
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
      <View>  
        <View style={styles.header}>
          <Image source={require('../assets/images/user.jpg')} style={styles.profile}/>
          <Text style={styles.names}>Judy</Text>
        </View>     
        <View style={styles.userInfo}>
          <View style={styles.section}>
            <Text style={styles.names}>50</Text>
            <Text>Weight(kg)</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.names}>165</Text>
            <Text>Height(cm)</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.names}>ccc</Text>
            <Text>BMI</Text>
          </View>
        </View>
            <Button title="Log out" onPress={() => {this.logout()}}/>
            <Button title="Log user Details" onPress={() => {console.log(this.state.details)}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(feedback) => this.setState({feedback})}
            value={this.state.feedback}
          />
          <Button title="Send feedback" onPress={() => {this.sendFeedback()}}/>
      </View>  
    );
  }
}
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderColor: '#2e9cdb'
  },
  profile: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginBottom: 15
  },
  names: {
    fontSize: 25, 
    fontWeight: 'bold', 
    color: 'black', 
    backgroundColor: 'transparent',
    marginBottom: 3
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#2e9cdb'
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  });