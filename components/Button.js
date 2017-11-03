import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";


class HomeButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>
                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                <Text style={styles.buttontext}>Trainers</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                <Text style={styles.buttontext}>Timetble</Text>
                </TouchableHighlight>
                </View>

                <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>
                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                <Text style={styles.buttontext}>Programmes</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                <Text style={styles.buttontext}>What's New</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touchable}
                onPress={() => {
                    this.setModalVisible(true)
                }}>
                <Text style={styles.buttontext}>Feedback</Text>
                </TouchableHighlight>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',  
    marginLeft:50, 
    marginTop:30,
    marginBottom:30,
     
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
    backgroundColor: '#2e9cdb', 
    justifyContent: 'center',
  },
  buttontext:{
    alignSelf: 'center', 
    color: 'white'
  }

});


export default HomeButton;