import React from 'react';
import { 
  View, 
  StyleSheet,
  Image, 
  Text, 
  ScrollView, 
  FlatList 
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

import ImageExercise from '../components/ImageExercise';
import MenuItem from '../components/MenuItem';

export default class EquipmentScreen extends React.Component {
  static navigationOptions = {
    title: 'Equipment',
  };
  constructor(props){
    super(props);
    this.state = {
      equipment: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getEquipment( (equipment) => {
      console.log(news)
      this.setState({
        equipment: equipment
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
             data={Object.values(this.state.equipment)}
             renderItem={({item})=> 
                        <ImageExercise 
                        title={item.name} 
                        id={item.name}
                        handlePress={this.handlePress.bind(this)}
                        
                        imageSource={item.url}
                        />}
          />
        </View>
      </ScrollView> 
    );
  }
}
const styles = StyleSheet.create({
  
});