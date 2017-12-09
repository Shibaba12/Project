import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Layout from '../constants/Layout';


export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Do It",
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  handleClick() {
    this.props.navigation.navigate('MapScreen', {type: this.props.navigation.state.params.type})
  }

  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.name}</Text>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.description}</Text>
            <Image>{params.url}</Image>
            <Button
            title='Go to Map'
            onPress={this.handleClick.bind(this)}
            />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
