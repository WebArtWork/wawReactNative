import React, {Component} from 'react';
import PassRecover from "./passwordRecovery";


export default class RecoveryPass extends Component{

	state={
		us: window.us,
		password: '',
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
			console.log(resp)
			this.props.navigation.navigate('Profile', {resp})
			//global.AsyncStorage.setItem("waw_user", JSON.stringify(resp));
		});
	}

	render(){
		let {code} = this.state;
		return <PassRecover 
			addChangePass = {(event) => this.addChangePass(event)}
			changePass = { (pass)=> this.setState({password: pass})}
			changeCode = { (code)=> this.setState({code: code})}
			user_reg_info={this.state}
			navigation = {this.props.navigation}/>
		
	}
} 

 