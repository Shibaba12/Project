import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class NewsCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri : this.props.imageSource}}/>
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
        backgroundColor: '#FFFFFF', 
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 8,
        marginVertical: 4,
        width: 360,
        height: 200      
    },
    textCont: {
        flex: 1,
        justifyContent: 'center',
        
    },
    imageContainer: {
        width:300,
        height:200,
        alignItems: 'center',
        justifyContent:'center' 
    },
    image: {
        flex: 1,
        width:360,
        height:200,
        position: 'absolute'
    },
    title: {
        fontSize: 35, 
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

export default NewsCard;
