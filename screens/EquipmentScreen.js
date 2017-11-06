import React from 'react';
import { View, Image, Text, ScrollView, FlatList } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Layout from '../constants/Layout';
import Database from '../api/database';

import ImageExercise from '../components/ImageExercise';

export default class EquipmentScreen extends React.Component {
  static navigationOptions = {
    title: 'Equipment',
  };

  constructor(props){
    super(props);
    this.state = {
      machines: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getMachines( (machines) => {
      this.setState({
        machines: machines
      })
    });
  }

  handlePress(name, description) {
    this.props.navigation.navigate('SingleEquipment', {name: name, description: description})
  }  

  render() {
    const { navigate } = this.props.navigation;
    return(
      <ScrollView>
        <View style={{height:1000}}> 
          <FlatList
             data={Object.values(this.state.machines)}
             renderItem={({item})=> 
                        <ImageExercise 
                        title={item.name} 
                        id={item.name}
                        handlePress={this.handlePress.bind(this)}
                        description={item.description}
                        imageSource={item.url}
                        />}
          />
        </View>
      </ScrollView> 
    );
  }
}
