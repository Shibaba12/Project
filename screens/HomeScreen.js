import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
} from 'react-native';
import Layout from '../constants/Layout';
import ImageExercise from '../components/ImageExercise';
import Overlay from '../components/Overlay';
import InputTest from '../components/InputTest';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title:"Home"
  };
handlePress() {
  console.log('1234567');
};
constructor(proprs){
  super(proprs);
  this.state={
    exercises:[]
  }
}

componentDidmount(){
   Database.getExercise((exercises) => {
     console.log(exercises);
     this.setState({
       exercises:exercises
     })
   });
  }


handlePress(name) {
  this.props.navigation.navigate('SingleExerxise',{name:name});
}
filterExercise(name){
  let newExercise = Object.values(this.state.exercises).slice().filter((item)=>{
    return item.type = name;
  })
  this.setState({
    exercises:newExercise
  })
}

  render() {
    return (
      <ScrollView>           
             <View style={styles.GroupA}>
                <ImageExercise 
                title={"Heading1"} 
                description={'AAAAAAAA'} 
                imageSource={require('../assets/images/exercise.jpg')}/>

                <ImageExercise
                handlePress={this.handlePress}
                title={'Bench press'}
                description={'Lorem ipsum dolor sit amet in vina veritas'}
                imageSource={require('../assets/images/exercise.jpg')}/>                                  
             </View>
             <View style={styles.GroupB}>
               <Overlay name={'TitleA'} image={require('../assets/images/salad.jpg')}/>
             </View>
             <ScrollView horizontal>           
                <View style={styles.GroupC}>  
                <Overlay name={'TitleB'} image={require('../assets/images/salad.jpg')}/>
                <Overlay name={'TitleC'} image={require('../assets/images/salad.jpg')}/>               
                </View> 
             </ScrollView >

             

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
  GroupA:{
    flexDirection: 'column',
    padding:20,
  },
  GroupB:{
    padding:20,
  },
  GroupC:{
    flexDirection: 'row',
    
    padding:20
  }
});
