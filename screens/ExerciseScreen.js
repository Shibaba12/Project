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
} from 'react-native';
import Layout from '../constants/Layout';
import MenuItem from '../components/MenuItem';
import Overlay from '../components/Overlay';
export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
    title:"Exercise"
  };

  render() {
    return (
      <ScrollView >           
             <View style={{flexDirection: 'column'}}>
                <MenuItem 
                handlePress
                title={"Heading1"} 
                description={'AAAAAAAA'} 
                imageSource={require('../assets/images/exercise.jpg')}/>

                <MenuItem 
                title={"Heading2"}  
                description={'AAAAAAAA'} 
                imageSource={require('../assets/images/exercise.jpg')}/>                          
                <Overlay name={'TitleA'} image={require('../assets/images/salad.jpg')}/>
             </View>
             <ScrollView horizontal style={{flexDirection: 'column'}}>  
                <View style={{ flexDirection: 'row'}}>  
                <Overlay name={'TitleB'} image={require('../assets/images/salad.jpg')}/>
                <Overlay name={'TitleC'} image={require('../assets/images/salad.jpg')}/>
                <Overlay name={'TitleD'} image={require('../assets/images/salad.jpg')}/>
                </View> 
             </ScrollView>


      </ScrollView> 


    );
  }
}

