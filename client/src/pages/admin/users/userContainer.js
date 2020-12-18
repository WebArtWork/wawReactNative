import React from 'react';
import UserList from './components/user_list';
import GenerateUser from './components/generate_users';
import HeaderUser from './../../../common/header';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,	
	TouchableOpacity,
	ScrollView
} from 'react-native';


class Users extends React.Component{
		constructor(props){
		super(props);
	}
	state ={
		us: window.us,
		emeil: '',
		role: ['admin']
	}
	addNewUser=()=>{
		this.state.us.create(this.state.email)
	}
	// handleAddNewUser=(value)=>{
	// 	 this.setState({email: value})
	//  }
	render(){
			console.log(this.state.email)
		const {role, us, users} = this.state;
		return <View>
					<View> 
						<HeaderUser />
					</View>
					<ScrollView style={{marginBottom: 50}}>
					<View style={styles.users}>  
						<View style={styles.table_wrapp}>
								<View style={styles.table, {cellPadding: 0, cellSpacing: 0}}>
									<View>
										<View>
											<View><Text>User</Text></View>
											<View><Text>Email</Text></View>
											<View><Text>Admin</Text></View>
											<View><Text>Actions</Text></View>
										</View>
									</View>
									<UserList users ={this.state.us.users}/>
								</View>
							</View>
							<TouchableOpacity style={styles.users_field}>
								<View style={styles.waw_input}>							
						                <Text>Add new user</Text>
							            <TextInput type="text" placeholder="Email" defaultValue={this.state.email}  onChangeText={(value)=>{ this.setState({email: value})}}/>
						        </View>
						        <Button  style={styles.waw_btn, styles._primary} type='submit' onClick={this.addNewUser} title="CREATE"/>
							</TouchableOpacity>
							<GenerateUser users={this.state.users}/>
						</View>
						</ScrollView>
					</View>
	}
}


export default Users 

const styles = StyleSheet.create({
	users:{

	},
	table_wrapp:{

	},
	table:{

	},
	users_field:{

	},
	waw_input:{

	},
	waw_btn:{

	},
	_primary:{

	}
});