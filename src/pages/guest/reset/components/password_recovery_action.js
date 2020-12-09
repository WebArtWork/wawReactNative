import React, {Component} from 'react';
import {Redirect} from "react-router-native";
import Pass_Recover from "./password_recovery";


export default class RecoveryPass extends Component{

	state={
		us: {}, //window.us
		password: '',
		redirect: false,
		code:''
	}
	addChangePass=(event)=>{
		event.preventDefault();
		let code = parseInt(this.state.code) 
		let change_pass = {email: this.props.email, password: this.state.password, pin: code};
		window.http.post('/api/user/change', change_pass, (resp)=>{
			if(resp){
				alert(resp)
			 	this.setState({password: this.state.password});
			}
			else{
				alert(resp)
			}
		});
		window.http.post('/api/user/login', change_pass, (resp)=>{
			window.localStorage.setItem("waw_user", JSON.stringify(resp));
			this.setState({ redirect: true });
		});
	}

	render(){
		let {redirect, code} = this.state;
		if(redirect){
			return <Redirect to='/profile'/>
		}
		return <Pass_Recover 
			addChangePass = {(event) => this.addChangePass(event)}
			changePass = { (pass)=> this.setState({password: pass})}
			changeCode = { (code)=> this.setState({code: code})}
			user_reg_info={this.state}/>
		
	}
} 

