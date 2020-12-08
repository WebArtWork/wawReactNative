import React from 'react';
import {Link , Redirect } from "react-router-native";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

const Login =(props)=>{
	const SubmitForm = (event)=>{
		props.submitHandle (event)
	}
	return (
	<>
		<View className="auth-wrapper">
			<View className="auth">
			<Text className="auth-title">Log In</Text>
				<Text className="auth-form"> 
					<View className="waw-input mb15">
						<Text>EMAIL:</Text>
						<TextInput name="email"
						placeholder="email"
						onChangeText= {(value) =>{props.changeHandlerEmail(value)}} 
						defaultValue = {props.user.email}
						/>
					</View>
					<View className="waw-input mb15">
						<Text>PASSWORD:</Text>	
						<TextInput secureTextEntry={true} 
						name="password" 
						placeholder="password" 
						onChangeText= {(value) =>{props.changeHandlerPass(value)}} 
						defaultValue = {props.user.password}/>
					</View>
					<View className="auth-form__btn">
						<Button className="waw-btn _primary" type="submit" title ="Login" onPress={SubmitForm}/> 
					</View>
				</Text>
				<View className="auth-link">
					<Link to =''><Text>Forgot password?</Text></Link>
					<Link to ='/signup'><Text>Don't have an account?</Text></Link>
				</View>
			</View>
		</View>
	</>)
}

export default Login

const styles = StyleSheet.create({

});