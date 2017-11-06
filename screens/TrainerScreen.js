import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import InputTest from '../components/InputTest';
import ImageExercise from '../components/ImageExercise';

export default class TrainerScreen extends React.Component {
  static navigationOptions = {
   title: "Trainers"
  };
  constructor(props){
    super(props);
    this.state = {
      trainers: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getTrainers( (trainers) => {
      this.setState({
        trainers: trainers
      })
    });
  }

  handlePress(name, description, type) {
    this.props.navigation.navigate('SingleTrainer', {name: name, description: description, type: type})
  }   

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>           

      <FlatList
             data={Object.values(this.state.trainers)}
             renderItem={({item})=> 
                        <ImageExercise 
                        title={item.name} 
                        id={item.name}
                        handlePress={this.handlePress.bind(this)}
                        description={item.type}
                        imageSource={item.url}
                        />}
             />
             
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});