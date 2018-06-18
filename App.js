import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground,
         Alert,
         BackHandler} from 'react-native';

import * as firebase from 'firebase';
import { LinearGradient } from 'expo';
import {
  createStackNavigator ,
} from 'react-navigation';
import globals from './assets/css/global';
import TextField from './components/TextField';
import AuthButton from './components/AuthButton';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
const firebaseConfig = {
  apiKey: "AIzaSyCela0E46EsAdVz-CMj5heUdLseTLA1wp8",
  authDomain: "utang-5fa48.firebaseapp.com",
  databaseURL: "https://utang-5fa48.firebaseio.com/",
  storageBucket: "gs://utang-5fa48.appspot.com"
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = { email: '',
                   password:'' };
    this.props.navigation.navigate("Home");
  }
  login(){
    //console.log("Hello");
    var that  =  this;
    console.log(this.state.email, this.state.password);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{
      that.props.navigation.navigate("Home");
      //console.log("HelloEphraim");
    }).catch((err)=>{
      Alert.alert(err.message);
      console.log(err);
    });
  }
  listeningForAuthChange(){
    var that = this;
    firebase.auth.onAuthStateChanged((user)=>{
      console.log('auth', user);
      if(user){
        this.setState({name: user.email});
        that.props.navigation.navigate("Home");
      }else{
        that.props.navigation.navigate("Login");
      }
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground style = {[globals.container, {padding:20}]}  source = {require('./assets/images/backgroundLogin2.jpg')}>
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
              text = {this.state.email}
              placeholder = "Email"
              password = {false}
              onChangeText = {(email)=>{this.setState({email})}}
              styles = {{marginBottom:10}}
            />
            <TextField
              text = {this.state.password}
              placeholder = "Password"
              password = {true}
              styles = {{marginBottom:10}}
              onChangeText = {(password)=>{this.setState({password})}}
            />
            <AuthButton
              text = "Login"
              onPress = {this.login.bind(this)}
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
                    color:"white", }}
                    onPress = {()=>navigate("Register")}>
                Not a user? Sign up here
              </Text>
            </View>
          </View>
        </ImageBackground> 
        
      
    );
  }
}
export default createStackNavigator ({
  Login: { screen: App },
  Register: { screen: Register },
  Home: {screen: Home},
});
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});



