import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ImageBackground,
         Alert,
         BackHandler,
         DrawerLayoutAndroid
        } from 'react-native';
import { LinearGradient } from 'expo';
import globals from '../../assets/css/global';
import TextField from '../TextField';
import AuthButton from '../AuthButton';
import NavBar from '../NavBar';
import * as firebase from 'firebase';
import {
    createDrawerNavigator , DrawerActions
  } from 'react-navigation';

  
export default class Home extends React.Component {
    toggleDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
        console.log("Hello");
    }
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'Home',
        header: null,
    };
    render(){
        return(
            <View style = {{flex:1}}>
                <NavBar styles = {{height:150}}
                navigate = {this.props.navigation}
                ></NavBar>
                
            </View>
        );
    }
}
