import React from 'react'
import {Link} from "react-router-native";

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
					<Button style={styles.waw_btn, styles._primary} type="submit" title = "Continue" onPress = {props.submitHandle}/>
				</View>
			</TouchableOpacity>
			<View style={styles.auth_link}>
				<Link to='/'><Text>Login</Text></Link>
				<Link to='/signup'><Text>Sign up</Text></Link>
			</View>
		</View>
	</View>
}

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