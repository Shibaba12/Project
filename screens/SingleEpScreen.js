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


export default class SingleEpScreen extends React.Component {
  static navigationOptions = {
   title: "Equipment",
  };
  constructor(props){
    super(props);
    this.state = {
      equipment: []
    }
  }

  handleClick() {
    this.props.navigation.navigate('MapScreen', {type: this.props.navigation.state.params.type})
  }

  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView>
        <View>
          <Image style={styles.image} source={{uri : this.props.imageSource}}/>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{params.name}</Text>
          <Text style={styles.description}>{params.description} </Text>
          <Text style={styles.muscles}>{params.type}</Text>
        </View>     
        <View style={styles.container}>
          <Text style={styles.title}> Tips: </Text>
          <Text style={styles.tip}>{params.tip}</Text>
        </View>    
            <Button
            title='Go to Map'
            onPress={this.handleClick.bind(this)}
            />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    marginVertical: 8,
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
  },
  muscles:{
    fontSize: 20,
    fontWeight: '300',
    color:'#2e9cdb',
    marginTop:10,
    marginBottom:20,
  },
  tip:{
    fontSize: 20,
    fontWeight: '300',
    color:'gray',
    marginTop:10,
    marginBottom:20,
  },
  
  image: {  
    width: 360,
    height: 200,    
  },

});
