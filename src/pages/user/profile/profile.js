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
			<View className="profile-wrapper">
				<View className="profile">
					<Text className="profile-header">Profile Settings</Text>
					<View className="profile-body">
						<View className="profile-left">
							<View className="waw-input mb15">
								<Text>Name</Text>
								<TextInput type="text" name="name" placeholder="Your name" />
							 {/* defaultValue={props.us.name}  onChangeText={(event)=>{props.us.name=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-input mb15">
								<Text>Phone number</Text>
								<TextInput type="tel" name="number" placeholder="Phone number" />
							{/*defaultValue={props.us.data.phone} onChangeText={(event)=>{props.us.data.phone=event.target.value;}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-input mb15">
								<Text>Location</Text>
								<TextInput type="text" name="location" placeholder="Your location"  />
							{/*defaultValue={props.us.data.location} onChangeText={ (event)=>{props.us.data.location=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-textarea">
								<Text className="waw__label">Bio</Text>
								<TextInput className="_mh150"   multiline={true} placeholder="Bio"/>
							 {/* defaultValue={props.us.data.bio} onChangeText={(event)=>{props.us.data.bio=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
						</View>
						<View className="profile-right">
							<Text className="profile-right__img">
								<Image source={props.us.avatarUrl || DefaultAvatar  } alt="User Avatar"/> 
								<Text className="profile-right__img__upload">
									<Image source ={ArrowUp} className="material-icons"/> 
									<TextInput type="file" name="file"/> {/* onChangeText={this.props.changeAvatar} accept="image/*" style={{display: 'none'}}*/}
								</Text>
							</Text>
							<Text className="profile-logout">
								<Button className="waw-btn _danger" title ="Logout" /> {/* onPress={this.props.LogOut}*/}
							</Text>
						</View>
						</View>
					</View>
			</View>
		</>)
}

export default Profile_Page

const styles = StyleSheet.create({

});