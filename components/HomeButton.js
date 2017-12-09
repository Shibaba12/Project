import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";



class HomeButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1,flexDirection: 'column', marginBottom:60,}}>
                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                   this.props.handleClick('EquipmentScreen')
                }}>
                <Image source={require('../assets/images/map.png')} style={{width: 100, height: 100}}/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.props.handleClick('TrainerScreen')
                 }}>
                <Image source={require('../assets/images/trainers.png')} style={{width: 100, height: 100}}/>
                </TouchableHighlight>
                </View>

                <View style={{flex: 1,flexDirection: 'column'}}>
                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.props.handleClick('TimetableScreen')
                }}>
                <Image source={require('../assets/images/timetable.png')} style={{width: 100, height: 100}}/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.props.handleClick('NewScreen')
                }}>
                <Image source={require('../assets/images/new.png')} style={{width: 100, height: 100}}/>
                </TouchableHighlight>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'row',  
    marginLeft:50, 
    marginTop:50,
    marginBottom:50,    
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  },
  touchable:{
    width: 100, 
    height: 100, 
    borderRadius: 200, 
    marginBottom:50,
  },
});


export default HomeButton;