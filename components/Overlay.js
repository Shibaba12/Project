import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Overlay extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri : this.props.imageSource}}/>
                <View style={styles.imageContainer}>
                    
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View> 
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        width: 330,
        height: 200,     
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,                     
        marginHorizontal: 8,   
        marginVertical: 4,          
    },
    imageContainer: {
        width:330,
        height:200,
        alignItems: 'center',
        justifyContent:'center' ,
        alignSelf:'stretch',
        backgroundColor:'rgba(0, 0, 0,0.4)'
    },
    image: {
        flex: 1,
        width:330,
        height:200,
        position: 'absolute'
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white', 
        backgroundColor: 'transparent'     
    },
    description: {
        fontSize: 16,
       
    }

})

export default Overlay;
