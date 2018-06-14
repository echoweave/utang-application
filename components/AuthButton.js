import React from 'react';
import globals from '../assets/css/global';
import {Button, 
        StyleSheet,
        Text,
        TouchableOpacity} from 'react-native';

export default class AuthButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style = {[styles.button, this.props.buttonStyle]}>
                <Text style = { {fontWeight:"bold",
                                letterSpacing:3,
                                color:"white"}}>{this.props.text}</Text>        
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor:"rgba(0,0,0,0)",
        borderWidth:2,
        borderColor:"white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        width:"100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
  