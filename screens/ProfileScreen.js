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
import Feedback from '../components/Feedback';
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
          <Text style={styles.names}>{this.state.details.name}</Text>
        </View>     
        <View style={styles.userInfo}>
          <View style={styles.section}>
            <Text style={styles.names}>{this.state.details.weight}</Text>
            <Text>Weight(kg)</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.names}>{this.state.details.height}</Text>
            <Text>Height(cm)</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.names}>ccc</Text>
            <Text>BMI</Text>
          </View>
        </View>
        <View style={styles.GroupB}>

          <TouchableOpacity 
            onPress={() => { this.props.handleClick()}}>
            <Image source={require('../assets/images/track.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity>
          
          <View style={styles.textRow}><Feedback/></View>
         
          <TouchableOpacity onPress={() => {this.logout()}}>            
            <Image source={require('../assets/images/logoff.png')} style={{width: 100, height: 100}}/>
          </TouchableOpacity>               
        </View>          
      </View>  
    );
  }
}
//https://github.com/react-community/react-native-image-picker failed!
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderColor: '#2D9CDB'
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
  GroupB: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:50,  
  },
 
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  });