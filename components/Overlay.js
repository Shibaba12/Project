import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";

class Overlay extends Component {
    render () {
        return (           
        <View style={styles.container} >
        <Image style={styles.bgImage} source={this.props.image}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'stretch',
        backgroundColor:'rgba(0,0,0,0.5)'}}>
        <Text style={[styles.textStyle, {backgroundColor:'transparent'}]}>Text</Text>
      </View>  
      </Image>      
      </View>                        
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: 320, 
        height: 200, 
        flexDirection: "column",
        justifyContent:'space-around',
        alignItems:'center', 
        justifyContent:'space-between',
        marginRight:10  
    },
    bgImage: {
        width: 320,
        height: 200,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        fontStyle:'italic',
        fontFamily:'Baskerville'    
    }
})
export default Overlay;