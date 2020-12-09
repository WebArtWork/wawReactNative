import React from 'react'
import {Link} from "react-router-native";

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

export default function pass_recover_list(props){
	const SubmitForm = (event)=>{
		props.addChangePass(event)
	}
	return(
			<View className="auth-wrapper">
				<View className="auth">
					<Text className="auth-title">Set New Password</Text>
					<Text className="auth-form">
						<View className="waw-input mb15">
							<Text>Email:</Text>
							<TextInput type="text" placeholder="Code" name="code" onChangeText={(value) =>{props.changeCode(value)}}  />
						</View>
						<View className="waw-input mb15">
							<Text>Password:</Text>
							<TextInput type="password"
							 placeholder="New password"
							 secureTextEntry={true} 
							  defaultValue={props.user_reg_info.password} 
							  name="password" 
							  onChangeText={(value) =>{props.changePass(value)}} />
						</View>
						<View className="auth-form__btn">
							<Button className="waw-btn _primary" type="submit" title ="Save" onPress={SubmitForm}/>
						</View>
					</Text>
					<View className="auth-link">
						<Link to='/'><Text>Login</Text></Link>
						<Link to='signup'><Text>Sing up</Text></Link>
					</View>
				</View>
			</View>
	)
}
