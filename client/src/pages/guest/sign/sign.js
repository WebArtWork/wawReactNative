import React from 'react';
import {Link} from "react-router-native";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity
} from 'react-native';

const Sign_Page =(props)=>{
		const SubmitForm = (event)=>{
			props.submitHandle (event)
	}
	return (<>
	<View style={styles.auth_wrapper}>
		<View style={styles.auth}>
		<Text style={styles.auth_title}>Sign up</Text>
			<TouchableOpacity style={styles.auth_form}> 
				<View style={styles.waw_input, styles.mb15}>
					<Text>Email:</Text>
					<TextInput  name="email" placeholder="email" defailtValue={props.user.email} onChangeText={(value) => {props.changeHandlerEmail(value)}}/>
				</View>
				<View style={styles.waw_input, styles.mb15}>
					<Text>Password:</Text>
					<TextInput  secureTextEntry={true} placeholder="Password" name="password" defailtValue={props.user.password} onChangeText={(value) =>{props.changeHandlerPass(value)}}/>
				</View>
				<View style={styles.auth_form__btn}>
					<Button style={styles.waw_btn, styles._primary} type="submit" title="Sign" onPress={SubmitForm} />
				</View>
			</TouchableOpacity>
			<View style={styles.auth_link}>
				<Text>Already has an account?</Text>
				<Link to='/'><Text>Sign in</Text></Link>
			</View>
		</View>
	</View>
	</>)
}

export default Sign_Page

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