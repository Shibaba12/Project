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
      <ScrollView>
        <View style={[styles.header, styles.bordered]}>
          
          
        </View>
        <View style={[styles.userInfo, styles.bordered]}>
          <View style={styles.section}>
            <Text style={styles.space}>aaa</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.space}>bbb</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.space}>ccc</Text>
            <Text>Following</Text>
          </View>
        </View>
        
            <Text>PRO SCREEN</Text>
            <Button title="Log out" onPress={() => {this.logout()}}/>
            <Button title="Log user Details" onPress={() => {console.log(this.state.details)}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(feedback) => this.setState({feedback})}
            value={this.state.feedback}
          />
          <Button title="Send feedback" onPress={() => {this.sendFeedback()}}/>
        </ScrollView>
    );
  }
}
let styles = StyleSheet.create(theme => ({
  root: {
    backgroundColor: 'red'
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: 'red'
  },
  section: {
    flex: 1,
    alignItems: 'center'
  },
  space: {
    marginBottom: 3
  },
  separator: {
    backgroundColor: 'theme.colors.border.base',
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center'
  }
  }));