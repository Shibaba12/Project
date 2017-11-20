import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  AvoidKeyboard,
  Keyboard
} from 'react-native';
import {FontAwesome} from '../assets/icons';
import LogInForm from '../components/LogInForm';
import RegistrationForm from '../components/RegistrationForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <AvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={styles.header}>
           <Text style={styles.textStyle}>Welcome to Body Center</Text>
        </View>           
        <Image 
           source={require('../assets/images/bg.jpg')} 
           style={styles.backgroundImage}
        />
        
        <View style={styles.content}>
          <View>
            <TextInput Type='rounded' placeholder='Username'/>
            <TextInput Type='rounded' placeholder='Password' secureTextEntry={true}/>
            <Button 
               style={{marginVertical: 20}} 
               Type='large' 
               text="Log in" 
               onPress={() => {
                this.props.navigation.goBack()
              }}/>
          </View>
          <View style={styles.buttons}>
            <Button style={styles.button} Type='social'>
              <Text Type='awesome hero'>{FontAwesome.twitter}</Text>
            </Button>
            <Button style={styles.button} Type='social'>
              <Text Type='awesome hero'>{FontAwesome.google}</Text>
            </Button>
            <Button style={styles.button} Type='social'>
              <Text Type='awesome hero'>{FontAwesome.facebook}</Text>
            </Button>
          </View>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text Type='primary3'>Don’t have an account?</Text>
              <Button Type='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text Type='header6'> Sign up now </Text>
              </Button>
            </View>
          </View>
        </View>
      </AvoidKeyboard>
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
  },
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-between'
  },
  image: {
    height: 77,
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 30, 
    textAlign: 'center', 
    backgroundColor: 'transparent', 
    color: 'white'
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderColor: 'red'
  },
  footer: {}
});