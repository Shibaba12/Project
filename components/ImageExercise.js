import React, { Component } from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity} from "react-native";

class ImageExercise extends Component {
    render () {
       return (  
        <View style={styles.container}>
             <View style={styles.imageContainer}>
                <Image style={styles.image} source={this.props.imageSource}/>
            </View>
            
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
            </View>
        </View>
                                       
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width:320,
        height: 130,
        flexDirection: "row",
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        alignItems: 'center',
        paddingHorizontal:5,
        padding:10,
        justifyContent:'space-between',
        marginTop:10        
    },
    imageCantainer:{
        padding:4,
    },
    image:{
        flex:1,
        width:100,
        height:100,
        borderRadius:50,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    description:{
        fontSize: 16,
        width:100,
    }        
})
export default ImageExercise