import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";

class Overlay extends Component {
    render () {
        return (
            
        <View style={{width: 300, height: 200, backgroundColor: 'white'}} >
        <Image style={styles.bgImage} source={this.props.image}/>
      </View>                                
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
        
    },
    bgImage: {
        width: 300,
        height: 200,
        overlayColor:'grey'
    }
})
export default Overlay;