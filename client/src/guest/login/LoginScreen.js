import React from 'react';
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

// class  extends React.Component{
// 	render(){

// 		let name = 'Alex';
// 		return (
// 		<View>
// 			<Text>LOGIN</Text>
// 			<TouchableOpacity onPress ={() =>{this.props.navigation.navigate('Profile', {name})}}>
// 				<Text>Go To Profile</Text>
// 			</TouchableOpacity>
// 		</View>)
// 	}
// }

const LoginScreen =(props)=>{
	return (
	<>
		<View style={styles.auth_wrapper}>
			<View style={styles.auth}>
			<Text style={styles.auth_title}>Log In</Text>
				<View  style={styles.auth_form}  >
					<View style={styles.waw_input, styles.mb15}>
						<Text>EMAIL:</Text>
						<TextInput name="email"
						placeholder="email"
						onChangeText= {(value) =>{props.changeHandlerEmail(value)}} 
						defaultValue = {props.user.email}
						/>
					</View>
					<View style={styles.waw_input, styles.mb15}>
						<Text>PASSWORD:</Text>	
						<TextInput secureTextEntry={true}
						name="password" 
						placeholder="password" 
						onChangeText= {(value) =>{props.changeHandlerPass(value)}} 
						defaultValue = {props.user.password}/>
					</View>
					<View style={styles.auth_form__btn}>
						<TouchableOpacity style={styles.waw_btn, styles._primary}  onPress={(event)=>{props.submitHandle(event)}}> 
							<Text>Login</Text>
						</TouchableOpacity>
					</View>
					</View>
							<View style={styles.auth_link}>
					<TouchableOpacity style={styles.waw_btn, styles._primary}  onPress={()=>{props.goToReset()}}> 
							<Text>Forgot password?</Text>
						</TouchableOpacity>
					<TouchableOpacity style={styles.waw_btn, styles._primary}  onPress={()=>{props.goToSign()}}> 
							<Text>Don't have an account?</Text>
					</TouchableOpacity>
				{/*	<Link to ='reset'><Text>Forgot password?</Text></Link>
					<Link to ='signup'><Text>Don't have an account?</Text></Link>*/}
				</View>
			</View>
		</View>
	</>)
}

export default LoginScreen 


const styles = StyleSheet.create({
	
})