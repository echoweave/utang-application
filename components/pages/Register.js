import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground,
         Alert} from 'react-native';
import { LinearGradient } from 'expo';
import globals from '../../assets/css/global';
import TextField from '../TextField';
import AuthButton from '../AuthButton';
export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = { username: '',
                        password:'' };
    }
    static navigationOptions = {
        title: 'Register',
        header: null,
    };
    render(){
        return(
            <ImageBackground style = {[globals.container, {padding:20}]}  source = {require('../../assets/images/backgroundLogin2.jpg')}>
                <View style = {{flex:1, 
                          width:"100%",
                          justifyContent: 'center',}}>
                <Text style = {{fontWeight:"bold",
                                letterSpacing:2, 
                                fontSize:30, 
                                color:"white",
                                marginBottom:10,}}>Create Account</Text>
                
                    <Text style = {{fontWeight:"bold",
                                    letterSpacing:2, 
                                    fontSize:15, 
                                    color:"white"}}>Dont worry. it's Free.</Text>
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
                    text = "SIGN ME UP"
                    buttonStyle = {{marginBottom:10}}
                    />
                </View>
            </ImageBackground>
        );
    }
}