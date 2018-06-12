import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
export default class App extends React.Component {
  render() {
    return (
      
       
        
        <ImageBackground style = {{width:'100%', height: '100%'}}  source = {require('./assets/images/backgroundLogin2.jpg')}>
          
          <Text style = {{color:'red'}}>Hello world</Text>
        </ImageBackground> 
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
   
  },
});
