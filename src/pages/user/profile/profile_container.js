import React from 'react';
import {Redirect} from "react-router-native";

import Profile_Page from './profile'


class Profile_Container extends React.Component{
	
	constructor(props){
		super(props);
		// window.render.add('logout', ()=>{
		// 	this.setState({reload: false});
		// });
	}
	state={
		us:  {}, //window.us
		redirect_to_out: false,
		reload: false
	}
	// submitHandle =()=>{
	// 	this.state.us.update();
	// }
	// LogOut =(event)=>{
	// 	 this.setState({redirect_to_out: true })
	// 	this.state.us.logout();
	// }
	//  todataUrl =(fl, cb)=> {
	// 		var a = new FileReader();
	// 		a.onload = (e)=>{
	// 			var target: any = e.target;
	// 			cb(target.result);
	// 		}
	// 		a.readAsDataURL(fl);
	// 	}
	// changeAvatar =(e)=> {
	// 	this.todataUrl(e.target.files[0], (dataUrl)=>{
	// 		this.state.us.avatarUrl = dataUrl;
	// 		window.http.post('/api/user/avatar', {
	// 			dataUrl: dataUrl
	// 		});
	// 		this.setState({reload: true});
	// 	});
	// }

	render(){
		const { redirect_to_out, us } = this.state;	
		if(redirect_to_out){
			return <Redirect to='/'/>
		}
		return (<Profile_Page us ={this.state.us} />)
	}
}


export default Profile_Container 

