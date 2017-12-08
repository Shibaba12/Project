import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import Database from '../api/database';
import Overlay from '../components/Overlay'

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'What\'s New',
  };

  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    Database.getNews( (news) => {
      console.log(news)
      this.setState({
        news: news
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
          data={Object.values(this.state.news)}
          renderItem={({item})=> 
                   <Overlay 
                   title={item.name} 
                   id={item.name}
                   handlePress={this.handlePress.bind(this)}
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
