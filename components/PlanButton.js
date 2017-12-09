import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";



class PlanButton extends Component {
    render() {
        return (
            <View style={styles.GroupB}>
                <TouchableOpacity style={styles.touchable}
                onPress={() => {
                   this.props.handleClick('ExerciseScreen')
                }}>
                <Image source={require('../assets/images/allE.png')} style={{width: 110, height: 110}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable}
                onPress={() => {
                    this.props.handleClick('ProgramScreen')
                }}>
                <Image source={require('../assets/images/allP.png')} style={{width: 115, height: 115}}/>
                </TouchableOpacity>               
            </View>
    );
  }
}

const styles = StyleSheet.create({
  GroupB: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:20,
    marginBottom:20,
     
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  },
  touchable:{ 
    width: 110, 
    height: 110, 
    borderRadius: 110, 
  },
});
export default PlanButton;