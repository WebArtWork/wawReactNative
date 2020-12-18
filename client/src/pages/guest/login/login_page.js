import React from 'react';
import {Link , Redirect } from "react-router-native";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';

const Login =(props)=>{
	const SubmitForm = (event)=>{
		props.submitHandle (event)
	}
	return (
	<>
		<View style={styles.auth_wrapper}>
			<View style={styles.auth}>
			<Text style={styles.auth_title}>Log In</Text>
				<TouchableOpacity  style={styles.auth_form}>
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
						<Button style={styles.waw_btn, styles._primary} type="submit" title ="Login"  onPress={SubmitForm}/> 
					</View>
					</TouchableOpacity>
							<View style={styles.auth_link}>
					<Link to ='reset'><Text>Forgot password?</Text></Link>
					<Link to ='signup'><Text>Don't have an account?</Text></Link>
				</View>
			</View>
		</View>
	</>)
}

export default Login

const styles = StyleSheet.create({
	auth_wrapper:{

	},
	auth:{
		
	},
	auth_title:{

	},
	auth_form:{

	},
	waw_input:{

	},
	mb15:{

	},
	auth_form__btn:{

	},
	waw_btn:{

	},
	_primary:{

	},
	auth_link:{

	}
});