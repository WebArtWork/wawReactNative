import React from 'react';
import {Redirect} from 'react-router-native';

import Sign_Page from './sign'

class SignContainer extends React.Component{
	state ={
		user_reg: { email: 'abs', password: 'asvb'},
		redirect: false,
		reload: false
	}
	submitHandle =(event)=>{
		event.preventDefault();
		window.http.post('/api/user/status',{email: this.state.user_reg.email}, (resp)=>{
			if(!resp.email){		
				window.http.post('/api/user/signup', this.state.user_reg, (resp)=>{
					this.setState({ redirect: true });
				});
			}
			else {
				alert("This email already exists")
			}
		});

	}
	render(){
		if(this.state.redirect){
			return <Redirect to='/profile'/>
		}
		return  <Sign_Page 
			changeHandlerEmail = { (email)=> this.setState({email: email})}
			changeHandlerPass = { (pass)=> this.setState({password: pass})}
			submitHandle = {(event) => this.submitHandle(event)}
			user = {this.state.user_reg}/>
	}
}



export default SignContainer 