import React from 'react';
import {Redirect} from 'react-router-native';
import { AsyncStorage } from 'react-native';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

import LoginPage from './login_page'


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


		// fetch('/api/user/status', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(this.state.user_reg)
		// }).then((resp)=>{
		// 	console.log(resp)
		// 	return resp.json() }) 
		// .then((resp) =>{
		// 	console.log('Created Type is sent successfully');
		// }).catch(err => {
		// 	console.log('Type send failed', err);
		// });
		// return;


		 window.http.post('/api/user/status', user, (resp)=>{
			if(resp.email && resp.pass){	
				window.http.post('/api/user/login', user, (resp)=>{
					if(!resp.data) {resp.data={}};	
						 AsyncStorage.setItem("waw_user", JSON.stringify(resp))
						this.setState({ redirect: true});
					});
			}
			else if(!resp.email){
				let acept = window.confirm("There is no such email\nYou want to create an account?");
				if(acept){
					this.setState({ redirectsingup: true});
				}else{
					this.setState({ redirectsingup: false });
				}
			}
			else {
				alert("Your password is wrong")
			}
		});
	}
	render(){
		let {redirect, redirectsingup} = this.state;
		if(redirect){
			return <Redirect to='profile'/>
		}
		else if(redirectsingup){
			return <Redirect to='singup'/>
		}
		return <>
			<LoginPage 
				changeHandlerEmail = { (email)=> this.setState({email: email})}
				changeHandlerPass = { (pass)=> this.setState({password: pass})}
				submitHandle = {(event) => this.submitHandle(event)}
			 user = {this.state} />
		</>
	}
}


export default LoginContainer