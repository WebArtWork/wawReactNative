import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

import LoginScreen from './LoginScreen'


class LoginContainer extends React.Component {
	state={
		email: 'lobor@gmail.com', 
		password: 'helo', 
		redirect: false,
		redirectsingup: false
	}

	 submitHandle = (event)=>{
		event.preventDefault();
		let user = {email: this.state.email, password: this.state.password}
		 window.http.post('/api/user/status', user, (resp)=>{
			if(resp.email && resp.pass){	
				 window.http.post('/api/user/login', user, (resp) =>{
					if(!resp.data) {resp.data={}};	
					this.props.navigation.navigate('Profile', {resp})
						//await AsyncStorage.setItem("waw_user", JSON.stringify(resp))
						this.setState({ redirect: true});
					});
			}
			else if(!resp.email){
				alert('This email does not exist')
			}
			else {
				alert("Your password is wrong")
			}
		});
	}

	render(){
		let {redirect, redirectsingup} = this.state;
		return <>
			<LoginScreen 
				changeHandlerEmail = { (email)=> this.setState({email: email})}
				changeHandlerPass = { (pass)=> this.setState({password: pass})}
				goToReset = {()=>{this.props.navigation.navigate('Reset')}}
				goToSign = {()=>{this.props.navigation.navigate('Sign')}}
				submitHandle = {(event) => this.submitHandle(event)}
			 	user = {this.state} />
		</>
	}
}


export default LoginContainer
