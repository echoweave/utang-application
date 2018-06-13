import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground,
         Alert} from 'react-native';
import { LinearGradient } from 'expo';
import globals from './assets/css/global';
import TextField from './components/TextField';
import AuthButton from './components/AuthButton';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                   password:'' };
  }
  doSomething(){
    console.log("Hello world");
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
        <ImageBackground style = {styles.container}  source = {require('./assets/images/backgroundLogin2.jpg')}>
          <View style = {{flex:1, 
                          width:"100%",
                          alignItems: 'center',
                          justifyContent: 'center',}}>
            <Text style = {{fontWeight:"bold",
                            letterSpacing:2, 
                            fontSize:30, 
                            color:"white"}}>Utang</Text>
          </View>
          <View style = {{flex:1,  
                          width:"100%",
                          alignItems: 'center',}}>
            <TextField
              text = {this.state.username}
              placeholder = "Username or email"
              password = {false}
              styles = {{marginBottom:10}}
            />
            <TextField
              text = {this.state.password}
              placeholder = "password"
              password = {true}
              styles = {{marginBottom:10}}
            />
            <AuthButton
              text = "Login"
              onPress = {() =>this.doSomething()}
              buttonStyle = {{marginBottom:10}}
            />
            <Text style = {{
                    fontWeight:"bold",
                    color:"white", }}>
              Forgot Password?
            </Text>
            <View style = {{flexDirection:"column-reverse",
                            flex:1,
                            paddingBottom:20}}>
              <Text style = {{
                    fontWeight:"bold",
                    color:"white", }}>
                Not a user? Sign up here
              </Text>
            </View>
          </View>
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
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
   
  },
});
