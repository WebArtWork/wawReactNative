import React from 'react';
import {Redirect} from 'react-router-native';
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
		email: 'ceo1@webart.work',  
		password: 'admin'
	}

	submitHandle = (event)=>{
		event.preventDefault();
		let user = {email: this.state.email, password: this.state.password}
		window.http.post('/api/user/status', user, (resp)=>{
			if(resp.email && resp.pass){	
				console.log(resp)
				window.http.post('/api/user/login', user, (resp)=>{
					if(!resp.data) {resp.data={}};	
					window.localStorage.setItem("waw_user", JSON.stringify(resp))
				
				//	this.setState({ redirect: true});
						window.location.reload() // тимчасово
					});
			}
			// else if(!resp.email){
			// 	let acept = window.confirm("There is no such email\nYou want to create an account?");
			// 	if(acept){
			// 		this.setState({ redirectsingup: true});
			// 	}else{
			// 		this.setState({ redirectsingup: false });
			// 	}

			// }
			else {
				alert("Your password is wrong")
			}
		});
	}
	render(){
		// console.log(this.props.redirect)
		// if(this.props.redirect){
		// 	return <Redirect to='profile'/>
		// }
		{/*else if(redirectsingup){
			return <Redirect to='singup'/>
		}*/}
		return <>
		  	{/*<Redirecting/>*/}
			<LoginPage 
				changeHandlerEmail = { (email)=> this.setState({email: email})}
				changeHandlerPass = { (pass)=> this.setState({password: pass})}
				submitHandle = {(event) => this.submitHandle(event)}
			 user = {this.state} />
		</>
	}
}


export default LoginContainer
