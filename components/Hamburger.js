import React from 'react';
import globals from '../assets/css/global';
import {Button, 
        StyleSheet,
        Text,
        TouchableOpacity,
        View} from 'react-native';

export default class Hamburger extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}>
                <View style = {styles.bar}></View>
                <View style = {styles.bar}></View>
                <View style = {styles.bar}></View>                       
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
    },
    bar:{
        marginBottom:4,
        backgroundColor:"white",
        width:5,
        borderRadius:2,
        width:25,
        height:3,
    }
});
  