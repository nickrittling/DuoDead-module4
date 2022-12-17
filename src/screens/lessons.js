import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import AppButton from '../assets/AppButton.js';
import { Container, Header, MainContent, NavButton } from '../components/structure.js';

class LessonScreen extends React.Component {
  
  loadRoute1 = () => this.props.navigation.navigate('Lesson 1');
  loadRoute2 = () => this.props.navigation.navigate('Lesson 2');
  loadRoute3 = () => this.props.navigation.navigate('Lesson 3');
  loadRoute4 = () => this.props.navigation.navigate('Lesson 4');
  
  render(){
        return (
        <View style={styles.container}>
          <Text style={{fontSize :25, fontWeight: 'bold', color: 'white'}}>Choose Your Lesson!</Text>
          <AppButton
            title="Word to Word" 
            onPress={this.loadRoute1}/>
          <AppButton 
            title='Image to Word' 
            onPress={this.loadRoute2}/>

          <AppButton 
            title='Audio to Word' 
            onPress={this.loadRoute3}/>

          <AppButton 
            title='Translate Sentence' 
            onPress={this.loadRoute4}/>

          
        </View>
      );
    }
}

export default LessonScreen;

const styles = StyleSheet.create({
	
	container :{
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec',
    alignItems: 'center', 
	}
})