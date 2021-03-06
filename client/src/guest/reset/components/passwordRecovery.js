import React from 'react'
import { styles } from '../../../style/style'

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';

export default function pass_recover_list(props){
	const SubmitForm = (event)=>{
		props.addChangePass(event)
	}
	return(
			<View style={styles.auth_wrapper}>
				<View style={styles.auth}>
					<Text style={styles.auth_title}>Set New Password</Text>
					<TouchableOpacity style={styles.auth_form}>
						<View style={styles.waw_input, styles.mb15}>
							<Text>Email:</Text>
							<TextInput type="text" placeholder="Code" name="code" onChangeText={(value) =>{props.changeCode(value)}}  />
						</View>
						<View style={styles.waw_input, styles.mb15}>
							<Text>Password:</Text>
							<TextInput secureTextEntry={true}
							 placeholder="New password"
							 secureTextEntry={true} 
							  defaultValue={props.user_reg_info.password} 
							  name="password" 
							  onChangeText={(value) =>{props.changePass(value)}} />
						</View>
						<View style={styles.auth_form__btn}>
							<TouchableOpacity style={styles.waw_btn, styles._primary} onPress={SubmitForm}>
								<Text>Save</Text>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
					<View style={styles.auth_link}>
					<TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}>
						<Text>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{props.navigation.navigate('Sign')}}>
						<Text>Sign up</Text>
					</TouchableOpacity>

					{/*	<Link to='/'><Text>Login</Text></Link>
						<Link to='signup'><Text>Sing up</Text></Link>*/}
					</View>
				</View>
			</View>
	)
}

// const styles = StyleSheet.create({
// 	auth_wrapper:{

// 	},
// 	auth:{

// 	},
// 	auth_title:{

// 	},
// 	auth_form:{

// 	},
// 	waw_input:{

// 	},
// 	mb15:{

// 	},
// 	auth_form__btn:{

// 	},
// 	waw_btn:{

// 	},
// 	_primary:{

// 	},
// 	auth_link:{
		
// 	}
// });