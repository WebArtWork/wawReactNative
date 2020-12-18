import React from 'react';
import {Link , Redirect } from "react-router-native";
import ArrowUp from "../../../assets/arrowup.png"
import DefaultAvatar from "../../../assets/user.png"
import HeaderUser from '../../../common/header'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';

class Profile_Container extends React.Component{
	
	constructor(props){
		super(props);
		// window.render.add('logout', ()=>{
		// 	this.setState({reload: false});
		// });
	}
	state={
		us:  window.us,
		redirect_to_out: false,
		reload: false
	}
	submitHandle =()=>{
		this.state.us.update();
	}
	LogOut =(event)=>{
		 this.setState({redirect_to_out: true })
		this.state.us.logout();
	}
	 todataUrl =(fl, cb)=> {
			var a = new FileReader();
			a.onload = (e)=>{
				var target: any = e.target;
				cb(target.result);
			}
			a.readAsDataURL(fl);
		}
	changeAvatar =(e)=> {
		this.todataUrl(e.target.files[0], (dataUrl)=>{
			this.state.us.avatarUrl = dataUrl;
			window.http.post('/api/user/avatar', {
				dataUrl: dataUrl
			});
			this.setState({reload: true});
		});
	}

	render(){
		const { redirect_to_out, us } = this.state;	
		if(redirect_to_out){
			return <Redirect to='/'/>
		}
		
		return (
		<>
			<View>
				<HeaderUser />
			</View>
			<ScrollView>
			<View style={styles.profile_wrapper}>
				<View style={styles.profile}>
					<Text style={styles.profile_header}>Profile Settings</Text>
					<View style={styles.profile_body}>
						<View style={styles.profile_left}>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Name</Text>
								<TextInput name="name" placeholder="Your name" defaultValue={us.name}  onChangeText={(value)=>{us.name=value}}  onEndEditing ={this.submitHandle} />
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Phone number</Text>
								<TextInput name="number" placeholder="Phone number" defaultValue={us.data.phone} onChangeText={(value)=>{us.data.phone=value}}
								onEndEditing ={this.submitHandle} />
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Location</Text>
								<TextInput name="location" placeholder="Your location" defaultValue={us.data.location} 
								 onChangeText={(value)=>{us.data.location=value}} 
								  onEndEditing ={this.submitHandle}/>
							</View>
							<View style={styles.waw_textarea}>
								<Text style={styles.waw__label}>Bio</Text>
								<TextInput style={styles._mh150} defaultValue={us.data.bio}  multiline={true} placeholder="Bio"
								onChangeText={(value)=>{us.data.bio=value}} 
								  onEndEditing ={this.submitHandle}/>
							</View>
						</View>
						<View style={styles.profile_right}>
							{/*<Text style={styles.profile_right__img}>
								<Image source ={us.avatarUrl || DefaultAvatar} alt="User Avatar"/> 
								 <TouchableOpacity style={styles.profile_right__img__upload}  onPress={this.changeAvatar} accept="image/*">
									<Image  source = {ArrowUp} style={styles.material_icons}/>
									<TextInput name="file" /> 
								 </TouchableOpacity>
							</Text>*/}
							<Text style={styles.profile_logout}>
								<Button style={styles.waw_btn, styles._danger} title ="Logout"  onPress={this.LogOut} />
							</Text>
						</View>
					</View>
				</View>
			</View>
			</ScrollView>
		</>)
	}
}


export default Profile_Container 

const styles = StyleSheet.create({
	profile_wrapper:{

	},
	profile:{

	},
	profile_header:{

	},
	profile_body:{

	},
	profile_left:{

	},
	waw_input:{

	},
	mb15:{

	},
	waw_textarea:{

	},
	waw__label:{

	},
	_mh150:{

	},
	profile_right:{

	},
	profile_right__img:{

	},
	profile_right__img__upload:{

	},
	material_icons:{
	},
	profile_logout:{

	},
	waw_btn:{

	},
	_danger:{
		
	}
});
