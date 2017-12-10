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

import EpCard from '../components/EpCard';
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
      this.setState({
        equipment: equipment
      })
    });
  }

  handlePress(name, description, muscles,tip,url,type) {
    console.log(type)
    this.props.navigation.navigate('SingleEquipment', {name: name, description: description, muscles:muscles, type:type, tip:tip,url:url})
  }  

  render() {
    const { navigate } = this.props.navigation;
    return(
      <ScrollView>
        <FlatList
          data={Object.values(this.state.equipment)}
          renderItem={({item})=> 
          <EpCard 
              title={item.name} 
              id={item.name}
              type={item.type}
              handlePress={() => {this.handlePress(item.name,item.description,item.muscles,item.tip,item.url,item.type)}}
              imageSource={item.url}/>} 
        />
      </ScrollView> 
    );
  }
}
const styles = StyleSheet.create({
  
});