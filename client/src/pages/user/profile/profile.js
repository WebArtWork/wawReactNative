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
	Image
} from 'react-native';

const Profile_Page =(props)=>{
	return (
		<>
			{<View >
				<HeaderUser />
			</View>}
			<View style={styles.profile_wrapper}>
				<View style={styles.profile}>
					<Text style={styles.profile_header}>Profile Settings</Text>
					<View style={styles.profile_body}>
						<View style={styles.profile_left}>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Name</Text>
								<TextInput name="name" placeholder="Your name" defaultValue={props.us.name}  onChangeText={(value) =>{props.changeHandlerName(value)}} />
							 {/*  onBlur={this.submitHandle} */}
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Phone number</Text>
								<TextInput name="number" placeholder="Phone number" defaultValue={props.us.data.phone} />
							{/* onChangeText={(event)=>{props.us.data.phone=event.target.value;}} onBlur={this.submitHandle}*/}
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Location</Text>
								<TextInput name="location" placeholder="Your location" defaultValue={props.us.data.location} />
							{/* onChangeText={ (event)=>{props.us.data.location=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
							<View style={styles.waw_textarea}>
								<Text style={styles.waw__label}>Bio</Text>
								<TextInput style={styles._mh150} defaultValue={props.us.data.bio}  multiline={true} placeholder="Bio"/>
							 {/*  onChangeText={(event)=>{props.us.data.bio=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
						</View>
						<View style={styles.profile_right}>
							<Text style={styles.profile_right__img}>
								<Image source={props.us.avatarUrl || DefaultAvatar  } alt="User Avatar"/> 
								<Text style={styles.profile_right__img__upload}>
									<Image source ={ArrowUp} style={styles.material_icons}/> 
									<TextInput type="file" name="file"/> {/* onChangeText={this.props.changeAvatar} accept="image/*" style={{display: 'none'}}*/}
								</Text>
							</Text>
							<Text style={styles.profile_logout}>
								<Button style={styles.waw_btn, styles._danger} title ="Logout" /> {/* onPress={this.props.LogOut}*/}
							</Text>
						</View>
						</View>
					</View>
			</View>
		</>)
}

export default Profile_Page

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