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
 import { FloatingAction } from 'react-native-floating-action';
import globals from '../../assets/css/global';
import TextField from '../TextField';
import AuthButton from '../AuthButton';
import NavBar from '../NavBar';

import * as firebase from 'firebase';
import {
    createDrawerNavigator , DrawerActions
  } from 'react-navigation';
const actions = [{
text: 'Add Utang',
icon: require('../../assets/images/dollar-coins.png'),
name: 'bt_accessibility',
position: 1
}];
  
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
                        route = {"Home"}
                ></NavBar>
                <FloatingAction
                    actions={actions}
                    onPressItem={
                      (name) => {
                        console.log(`selected button: ${name}`);
                      }
                    }
                />
            </View>
        );
    }
}
