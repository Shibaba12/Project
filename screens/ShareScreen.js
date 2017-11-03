import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class ShareScreen extends React.Component {
  static navigationOptions = {
   title: "Share"
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
  }

  handlePress(name, description) {
    this.props.navigation.navigate('SingleExercise', {name: name, description: description})
  }

    filterExercises(name) {
      // Don't manipulate state directly, get a copy and then modify
      let newExercises = Object.values(this.state.exercises).slice().filter((item) => {
        return item.type = name;
      })
      this.setState({
        exercises: newExercises
      })
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>          
      <View style={styles.GroupA}>
         <ImageExercise 
         title={"Heading1"} 
         description={'AAAAAAAA'} 
         imageSource={require('../assets/images/exercise.jpg')}/>                        
      </View>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});