import React from 'react';
import {Link , Redirect } from "react-router-native";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	Image
} from 'react-native';

const Profile =(props)=>{
	return (
		<>
			{/*<View >
				<HeaderUser/>
			</View>*/}
			<View className="profile-wrapper">
				<View className="profile">
					<Text className="profile-header">Profile Settings</Text>
					<View className="profile-body">
						<View className="profile-left">
							<View className="waw-input mb15">
								<Text>Name</Text>
								<TextInput type="text" name="name" placeholder="Your name" />
							 {/* defaultValue={us.name}  onChange={(event)=>{us.name=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-input mb15">
								<Text>Phone number</Text>
								<TextInput type="tel" name="number" placeholder="Phone number" />
							{/*defaultValue={us.data.phone} onChange={(event)=>{us.data.phone=event.target.value;}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-input mb15">
								<Text>Location</Text>
								<TextInput type="text" name="location" placeholder="Your location"  />
							{/*defaultValue={us.data.location} onChange={ (event)=>{us.data.location=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
							<View className="waw-textarea">
								<Text className="waw__label">Bio</Text>
								<TextInput className="_mh150"   multiline={true} placeholder="Bio"/>
							 {/* defaultValue={us.data.bio} onChange={(event)=>{us.data.bio=event.target.value}} onBlur={this.submitHandle}*/}
							</View>
						</View>
						<View className="profile-right">
							<Text className="profile-right__img">
								<Image alt="User Avatar"/> {/* src={us.avatarUrl || DefaultAvatar  } */}
								<Text className="profile-right__img__upload">
									<Image  className="material-icons"/>  {/*src ={ArrowUp}*/}
									<TextInput type="file" name="file"/> {/* onChange={this.changeAvatar} accept="image/*" style={{display: 'none'}}*/}
								</Text>
							</Text>
							<Text className="profile-logout">
								<Button className="waw-btn _danger" title ="Logout" /> {/* onClick={this.LogOut}*/}
							</Text>
						</View>
						</View>
					</View>
			</View>
		</>)
}

export default Profile

const styles = StyleSheet.create({

});