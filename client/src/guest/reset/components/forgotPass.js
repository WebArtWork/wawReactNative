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

export default function ForgotPass(props){
	return  <View style={styles.auth_wrapper}>
		<View style={styles.auth}>
			<Text style={styles.auth_title}>Reset Password</Text>
			<TouchableOpacity style={styles.auth_form}>
				<View style={styles.waw_input, styles.mb15}>
					<Text>Email:</Text>
					<TextInput  type="text" placeholder="Email" value={props.email} name="email"  onChangeText={(value) => {props.changeHandlerEmail(value)}} />
				</View>
				<View style={styles.auth_form__btn}>
					<TouchableOpacity style={styles.waw_btn, styles._primary} onPress={props.submitHandle}>
						<Text>Continue</Text>
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
			</View>
		</View>
	</View>
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