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
import InputTest from '../components/InputTest';
import PlanButton from '../components/PlanButton';
import EpCard from '../components/EpCard';


export default class PlanScreen extends React.Component {
  static navigationOptions = {
   title: "Plans"
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: [], programs: []
    }  
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
    Database.getPrograms( (programs) => {
      this.setState({
        programs: programs
      })
    });
  }

  handleClick(Item) {
    this.props.navigation.navigate(Item, {key: '0'})
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
        <Image source={require('../assets/images/headbg.jpg')} style={styles.backgroundImage}/> 
        <Text style={styles.myText}>BUILD YOUR BODY</Text>                        
      </View>

      <PlanButton handleClick={this.handleClick.bind(this)}/>

      <View ><Text style={styles.lableText}>  Recommend</Text></View>
      <ScrollView horizontal>           
        <View style={styles.GroupC}>
          <FlatList horizontal
            data={Object.values(this.state.exercises)}
            renderItem={({item})=> 
            <Overlay 
              title={item.name} 
              id={item.name}
              handlePress={this.handlePress.bind(this)}                    
              imageSource={item.url}
            />}
          />                
        </View> 
      </ScrollView >

      <View><Text style={styles.lableText}>  Body Building</Text></View>
      <ScrollView horizontal>           
        <View style={styles.GroupC}>
          <FlatList horizontal
            data={Object.values(this.state.programs)}
            renderItem={({item})=> 
            <Overlay 
              title={item.name} 
              id={item.name}
              handlePress={this.handlePress.bind(this)}                    
              imageSource={item.url}
            />}
          />                
        </View> 
      </ScrollView >

      
             
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  GroupA:{
    width:400,
    height:200,
    alignItems: 'center',
    justifyContent:'center'
  },
  GroupB:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:20,
    marginBottom:20,
  },
  GroupC:{
    flexDirection: 'row',
    padding:20
  },
  myText:{
    fontSize: 30, 
    fontWeight: 'bold', 
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'white', 
    backgroundColor: 'transparent'
  },
  lableText:{
    fontSize: 15, 
    alignItems: 'center', 
    color: 'white', 
    backgroundColor:'rgba(46,156,219,0.5)',
  },
  touchable:{
    width: 100, 
    height: 100, 
    borderRadius: 100, 
    backgroundColor: '#2e9cdb', 
    justifyContent: 'center',
    padding:20,
  },
  backgroundImage:{
    flex: 1,
    width:400,
    height:200,
    position: 'absolute'
  }
});