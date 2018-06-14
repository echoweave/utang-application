import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground,
         Alert} from 'react-native';
import { LinearGradient } from 'expo';
import {
  createStackNavigator ,
} from 'react-navigation';
import globals from './assets/css/global';
import TextField from './components/TextField';
import AuthButton from './components/AuthButton';
import Register from './components/pages/Register';

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null,
  };
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
              text = {this.state.username}
              placeholder = "Email"
              password = {false}
              styles = {{marginBottom:10}}
            />
            <TextField
              text = {this.state.password}
              placeholder = "Password"
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
});
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});



