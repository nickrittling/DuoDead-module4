import * as React from 'react';
import {Button, Text , View, StyleSheet, Alert, Image} from 'react-native';
import { NavigationContainer }
         from '@react-navigation/native';
import AppButton from '../assets/AppButton.js';

import { Container, Header, MainContent, NavButton } from '../components/structure.js';
import LessonScreen from './lessons.js';

class HomeScreen extends React.Component {

    loadRoute = () => this.props.navigation.navigate('Lessons');

    render(){
        return (
            <View style={styles.container}>
              <Text style={{fontSize :20, color: 'white', alignSelf: 'center', fontWeight: 'bold'}}>Welcome to Duo Dead!</Text>
              <AppButton
                      title="Start Lessons"
                      onPress={this.loadRoute}
                    />
              <AppButton
                      title="Choose Language"
                      onPress={null}
                    />
              <AppButton
                      title="Account"
                      onPress={null}
                    />

               <Image source={require('../assets/DuoDead_Logo.png')} style={styles.logo} />

            </View>
          );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
	
	container :
  {
		padding: 30,
		height: '100%',
		width: '100%',
		backgroundColor: '#9d78ec'
	},

  logo: 
  {
    marginTop: 50,
    width: 250,
    height: 250,
    alignSelf: 'center'
  }
})