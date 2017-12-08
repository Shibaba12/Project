import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Layout from '../constants/Layout';


export default class SingleEpScreen extends React.Component {
  static navigationOptions = {
   title: "This is Equipment",
  };
  constructor(props){
    super(props);
    this.state = {
      equipment: []
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
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.description} </Text>
            <Text>{params.type}</Text>
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
