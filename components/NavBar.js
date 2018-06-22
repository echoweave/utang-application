import React from 'react';
import { StyleSheet, 
         View,
         DrawerLayoutAndroid,
         Text,
         Switch, 
         Image } from 'react-native';
import { LinearGradient } from 'expo';
import globals from '../assets/css/global';
//import Hamburger from 'react-native-hamburger';
import Hamburger from './Hamburger';
export default class NavBar extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {active:false,
                     navigate:this.props.navigate,
                     activeFilter:true,
                     home:"white",
                     account:"white",
                     activeRoute: this.props.route}
       //console.log(this.state.navigate);
    }
    changeActiveFalse(){
        this.setState({active: false});
    }
    highLightNav(){
        that = this;
        if(this.state.activeRoute=="Home"){
            that.setState({home:"#bfbdbd",
                           account:"white"});
        }else if(this.state.activeRoute=="Account"){
            that.setState({home:"white",
                           account:"#bfbdbd"});
        }
    }
    openDrawer(){
        this.refs['myDrawer'].openDrawer();
    }
    render=function(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop:40}}>
                <View style = {{height:50,flexDirection:"row", paddingLeft:20, backgroundColor:this.state.home}}>
                    <View style = {{width:55}}>
                        <Image source={require('../assets/images/home-icon.png')}/>
                    </View>
                    <View style = {{alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft:5}}>
                                    <Text style = {{fontWeight:"bold",
                                        letterSpacing:2,
                                        fontSize:20}}>Home</Text>
                    </View>
                </View>
                <View style = {{height:50, flexDirection:"row" , paddingLeft:20, backgroundColor:this.state.account}}>
                    <View style = {{width:55}}>
                        <Image source={require('../assets/images/user-icon.png')}/>
                    </View>
                    <View style = {{alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft:5}}>
                                    <Text style = {{fontWeight:"bold",
                                        letterSpacing:2,
                                        fontSize:20}}>Account</Text>
                    </View>
                </View>
            </View>
        );
        return (
        <DrawerLayoutAndroid
        ref = "myDrawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        onDrawerClose = {this.changeActiveFalse.bind(this)}
        onDrawerOpen = {this.highLightNav.bind(this)}>
            <View style={{height:150}}>
                <LinearGradient
                colors={['#EC8C69', '#ED6EA0']}
                style={{ paddingTop: 30, paddingLeft:20, paddingRight:20, flex:1, flexDirection:"row" }}>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <View style = {{paddingTop:9}}>
                            <Hamburger 
                                onPress = {this.openDrawer.bind(this)}/>
                        </View>
                        <View>
                            <Text style = {{letterSpacing:2, color:"white", fontSize:25, marginLeft:5}}>UTANG</Text>
                        </View>
                    </View>
                    <View style = {{flex:1, flexDirection:"row-reverse"}}>
                        <View style = {{paddingTop:6}}>
                            <Switch value = {this.state.activeFilter}
                                    onValueChange = {()=>{this.setState({activeFilter:!this.state.activeFilter})}}/>
                        </View>
                        <View style = {{paddingTop:6}}>
                        <Text style = {{color:"white", fontSize:20}}>ACTIVE</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </DrawerLayoutAndroid>
        );
    }
}