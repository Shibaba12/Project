import React from 'react';
import {
  View,
  Image,
  Keyboard,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Theme,
  AvoidKeyboard
} from 'react-native';

export class SignUp extends React.Component {
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
        <View style={{alignItems: 'center'}}>
          <Text Type='h1'>Registration</Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput Type='rounded' placeholder='Name'/>
            <TextInput Type='rounded' placeholder='Email'/>
            <TextInput Type='rounded' placeholder='Password' secureTextEntry={true}/>
            <TextInput Type='rounded' placeholder='Confirm Password' secureTextEntry={true}/>
            <Button style={styles.save} Type='large' text='SIGN UP' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text Type='primary3'>Already have an account?</Text>
              <Button Type='clear'  onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text Type='header6'> Sign in now </Text>
              </Button>
            </View>
          </View>
        </View>
      </AvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height:77,
    resizeMode:'contain'
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
    justifyContent: 'space-around'
  },
  footer:{
    justifyContent:'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));