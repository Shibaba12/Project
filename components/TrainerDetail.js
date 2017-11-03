import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button'

const TrainerDetail = ({album}) => {
    const { titile, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                       style={thumbnailStyle}
                       source={{ uri:props.album.thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                   <Text style={headerTextStyle}>{props.album.title}</Text>
                   <Text>{props.alnum.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                   style={imageStyle}
                   source={{ uri: image}} 
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
        
  )
};

const styles = {
    headerContentStyle: {
        flesDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
export default TrainerDetail;