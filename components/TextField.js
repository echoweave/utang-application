import React from 'react';
import { StyleSheet, 
         TextInput } from 'react-native';
import globals from '../assets/css/global';
export default class TextField extends React.Component {
    constructor(props){
        super(props);
        this.state = {text:this.props.text}
    }
    changeText(value){
       
        this.setState({text:value.text});
    }
    render(){
        return (
            <TextInput
                style={ [globals.textField, this.props.styles]}
                value={this.state.text}
                onChangeText = {(text) => this.changeText({text})}
                underlineColorAndroid = "transparent"
                placeholder = {this.props.placeholder}
                secureTextEntry = {this.props.password}
            />
        );
    }
}