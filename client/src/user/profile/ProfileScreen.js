import React from 'react';
import ArrowUp from "../../assets/arrowup.png"
import DefaultAvatar from "../../assets/user.png"
import { styles } from '../../style/style';
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

class ProfileScreen extends React.Component{	
	state={
		user:  this.props.navigation.getParam('resp'),
		us: window.us,
		redirect_to_out: false,
		isonload: false
	}
	submitHandle =()=>{
		this.state.us.update();
	}
	LogOut =(event)=>{
		this.setState({redirect_to_out: true })
		this.props.navigation.navigate('Login')
		//this.state.us.logout();
	}

	render(){
		const { redirect_to_out, us, user} = this.state;	
		return (
		<>
			<ScrollView>
			<View style={styles.topbar_left}>
				{us.is.admin ?  
					<TouchableOpacity style={styles.topbar__link} onPress = {()=>{this.props.navigation.navigate('Users')}}>
						<Text style={styles.waw_btn, styles._danger}>Users</Text>
					</TouchableOpacity>
				 : <Text></Text>}
			</View>
	{/*     		  <View>
               <View style={styles.profileArea}>
                        <Image source={{uri: 'localhost:8080' + this.state.us.avatarUrl} || DefaultAvatar} resizeMode='cover'/>
                    </View>
                    <TouchableOpacity style={styles.EditImageBtn} onPress={() => { this.chooseImage() }}>
                      	<Image source={require('../../../assets/EditImage.png')} resizeMode='stretch'/>
                  	</TouchableOpacity>
                </View>*/}
				<View style={styles.profile_wrapper}>
				<View style={styles.profile}>
					<Text style={styles.profile_header}>Profile Settings</Text>
					<View style={styles.profile_body}>
						<View style={styles.profile_left}>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Name</Text>
								<TextInput name="name" placeholder="Your name" defaultValue={user.name}  onChangeText={(value)=>{user.name=value}}  onEndEditing ={this.submitHandle} />
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Phone number</Text>
								<TextInput name="number" placeholder="Phone number" defaultValue={user.data.phone} onChangeText={(value)=>{user.data.phone=value}}
								onEndEditing ={this.submitHandle} />
							</View>
							<View style={styles.waw_input, styles.mb15}>
								<Text>Location</Text>
								<TextInput name="location" placeholder="Your location" defaultValue={user.data.location} 
								 onChangeText={(value)=>{user.data.location=value}} 
								  onEndEditing ={this.submitHandle}/>
							</View>
							<View style={styles.waw_textarea}>
								<Text style={styles.waw__label}>Bio</Text>
								<TextInput style={styles._mh150} defaultValue={user.data.bio}  multiline={true} placeholder="Bio"
								onChangeText={(value)=>{user.data.bio=value}} 
								  onEndEditing ={this.submitHandle}/>
							</View>
						</View>
						<View style={styles.profile_right}>
							<TouchableOpacity style={styles.profile_logout} onPress={this.LogOut} >
								<Text style={styles.waw_btn, styles._danger}>Logout</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				</View>
			</ScrollView>
		</>)
	}
}


export default ProfileScreen 