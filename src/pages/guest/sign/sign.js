import React from 'react';
import {Link} from "react-router-native";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

const Sign_Page =(props)=>{
		const SubmitForm = (event)=>{
			props.submitHandle (event)
	}
	return (<>
		<View className="auth-wrapper">
		<View className="auth">
		<Text className="auth-title">Sign up</Text>
	<View className="auth-form">   {/* onSubmit ={submitHandle}*/}
	<View className="waw-input mb15">
	<Text>Email:</Text>
	<TextInput  name="email" placeholder="email" defailtValue={props.user.email} onChangeText={props.changeHandlerEmail(value)}/>
	</View>
	<View className="waw-input mb15">
	<Text>Password:</Text>
	<TextInput  type="password" placeholder="Password" name="password" defailtValue={props.user.password} onChangeText={props.changeHandlerPass(value)}/>
	</View>
	<View className="auth-form__btn">
		<Button className="waw-btn _primary" type="submit" title="Sign" onPress={SubmitForm} />
	</View>
	</View>
	<View className="auth-link">
	<Text>Already has an account?</Text>
	<Link to='/'><Text>Sign in</Text></Link>
	</View>
	</View>
	</View>

	</>)
}

export default Sign_Page

const styles = StyleSheet.create({

});