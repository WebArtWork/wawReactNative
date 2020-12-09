import React from 'react'
import {Link} from "react-router-native";

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

export default function ForgotPass(props){
	return  <View className="auth-wrapper">
		<View className="auth">
			<Text className="auth-title">Reset Password</Text>
			<Text className="auth-form">
				<View className="waw-input mb15">
					<Text>Email:</Text>
					<TextInput  type="text" placeholder="Email" value={props.email} name="email"  onChangeText={(value) => {props.changeHandlerEmail(value)}} />
				</View>
				<View className="auth-form__btn">
					<Button className="waw-btn _primary" type="submit" title = "Continue" onPress = {props.submitHandle}/>
				</View>
			</Text>
			<View className="auth-link">
				<Link to='/'><Text>Login</Text></Link>
				<Link to='/signup'><Text>Sign up</Text></Link>
			</View>
		</View>
	</View>
}