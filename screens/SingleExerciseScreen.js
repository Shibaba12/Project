import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';


export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Do It",
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    } 
  }


  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView>
        <Image style={styles.image} source={{uri : params.url}}/>
        <View style={styles.container}>    
          <Text style={styles.title}>{params.name}</Text>
          <Text style={styles.description}>{params.description}</Text>                
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: { 
    flex: 1,
    width: 360,
    height: 360,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 8,   
  },
  container: {
    flex: 1,
    width: 360,
    height: null,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  title:{
    fontSize: 24,
    fontWeight: '500',
    marginTop:20,
  },
  description:{
    fontSize: 20,
    fontWeight: '300',
    marginTop:10,
    marginBottom:20,
  },
});
