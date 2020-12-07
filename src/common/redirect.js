import React from 'react';
import {Redirect} from 'react-router-native';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

import LoginContainer from '../pages/guest/login/login_container'


class Redirecting extends React.Component{
	state ={
		redirect: false,
		redirectsingup: false
	}
	render(){
		return <>
		<LoginContainer 
		redirect = {this.state.redirect}
		gotoProfile = {() =>{this.setState({redirect: true})}}/>
		</>
	}
}

export default Redirecting;