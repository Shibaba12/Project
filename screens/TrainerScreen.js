import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';
import Overlay from '../components/Overlay';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class PlanScreen extends React.Component {
  static navigationOptions = {
   title: "Trainers"
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

    

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>           

      <FlatList
             data={Object.values(this.state.exercises)}
             renderItem={({item})=> 
                        <ImageExercise 
                        title={item.name} 
                        id={item.name}
                        handlePress={this.handlePress.bind(this)}
                        description={item.type}
                        imageSource={require('../assets/images/exercise.jpg')}
                        />}
             />
             
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});