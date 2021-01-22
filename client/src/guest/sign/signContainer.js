import React from 'react';

import Sign_Page from './sign'

class SignContainer extends React.Component{
	state ={
	 	email: '',
	  	password: '',
		redirect: false,
		reload: false
	}
	submitHandle =(event)=>{
		event.preventDefault();
			let user = {email: this.state.email, password: this.state.password}
		window.http.post('/api/user/status',{email: this.state.email}, (resp)=>{
			console.log(user)
			if(!resp.email){		
				window.http.post('/api/user/signup', user, (resp)=>{
					this.props.navigation.navigate('Profile', {resp})
				});
			}
			else {
				alert("This email already exists")
			}
		});

	}
	render(){
		return  <Sign_Page 
			changeHandlerEmail = { (email)=> this.setState({email: email})}
			changeHandlerPass = { (pass)=> this.setState({password: pass})}
			submitHandle = {(event) => this.submitHandle(event)}
			user = {this.state}
			navigation ={this.props.navigation}/>
	}
}



export default SignContainer 