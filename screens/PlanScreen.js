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
import NewsCard from '../components/NewsCard';
import InputTest from '../components/InputTest';

export default class PlanScreen extends React.Component {
  static navigationOptions = {
   title: "Plans"
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
        <Image source={require('../assets/images/headbg.jpg')} style={styles.backgroundImage}/> 
        <Text style={styles.myText}>BUILD YOUR BODY</Text>                        
      </View>

      <View style={styles.GroupB}>
      <TouchableHighlight style={styles.touchable}
      onPress={() => {
          this.setModalVisible(true)
      }}>
      <Image source={require('../assets/images/mine.png')}/>
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchable}
      onPress={() => {
          this.setModalVisible(true)
      }}>
      <Image source={require('../assets/images/viewall.png')}/>
      </TouchableHighlight>
      </View>

      <View><Text>Recommend</Text></View>
      <ScrollView horizontal>           
        <View style={styles.GroupC}>
          <FlatList horizontal
            data={Object.values(this.state.exercises)}
            renderItem={({item})=> 
            <NewsCard 
              title={item.name} 
              id={item.name}
              handlePress={this.handlePress.bind(this)}                    
              imageSource={item.url}
            />}
          />                
        </View> 
      </ScrollView >

      <View><Text>Body Building</Text></View>
      <ScrollView horizontal>   
         <View style={styles.GroupC}>
         <Overlay name={'TitleB'} image={require('../assets/images/salad.jpg')}/>
         <Overlay name={'TitleC'} image={require('../assets/images/salad.jpg')}/>               
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
  buttontext:{
    alignSelf: 'center', 
    color: 'white'
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