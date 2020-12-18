import React, {Component} from 'react';
import RecoverPass from './components/password_recovery_action';
import ForgotPassword from './components/forgot_pass';


export default class ForgotPassContainer extends  Component{
	state={
		email: 'ceo@webart.work',
		confirmpass: false
	}
	submitHandle = (event)=>{
		event.preventDefault();
			this.setState({confirmpass: true})
		window.http.post('/api/user/status', this.state, (resp)=>{
			if(resp.email){
				window.http.post('/api/user/request', {email: this.state.email})
			
				window.location.reload() // тимчасово
			 }
			else {
				alert("Your email is wrong")				
			}
		});
	}
	render(){
		const {confirmpass, email} = this.state;

		 if(!confirmpass){
			return <ForgotPassword 
				email = {email}
				submitHandle = {(event) => this.submitHandle(event)}
				changeHandlerEmail = { (email)=> this.setState({email: email})}/>
		}
		else{
			return <RecoverPass email ={this.state.email}/> 
		}


	}
}


