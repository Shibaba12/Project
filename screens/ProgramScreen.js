import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import Database from '../api/database';
import ProgramCard from '../components/ProgramCard'

export default class ProgramScreen extends React.Component {
  static navigationOptions = {
    title: 'Program',
  };

  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    Database.getPrograms( (programs) => {
      console.log(programs)
      this.setState({
        programs: programs
      })
    });
  }
  handlePress(name, description) {
    // this.props.navigation.navigate('SingleExercise', {name: name, description: description})
    console.log("pressed")
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <FlatList
          data={Object.values(this.state.programs)}
          renderItem={({item})=> 
                   <ProgramCard 
                   title={item.name} 
                   id={item.name}
                   handlePress={this.handlePress.bind(this)}
                   description={item.description}
                   imageSource={item.url}
                   />}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
