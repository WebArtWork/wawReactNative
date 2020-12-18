import React from 'react';
import {Redirect} from 'react-router-native';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';


class GenerateUsers extends React.Component{

	state ={
		us: window.us,
		emeil: '',
	}
	render(){
		return <View>
			<Text>Generate List</Text>
		</View>
	}
}


export default GenerateUsers