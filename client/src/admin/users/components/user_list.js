import React from 'react';
import Delete from '../../../assets/deleteButton.png';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	Image,
	FlatList,
	TouchableOpacity,
	CheckBox
} from 'react-native';


class UsersList extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	window.render.add('user list', ()=>{
	// 		this.setState({reload: !this.state.reload});
	// 	});
	// }
    state={
		us: window.us,
		admin: false,
		reload: false
	}
	deleteUser = (id) =>{
		console.log(id)
		this.state.us.delete(id);			
		}
	changeRole=(user)=>{
	
		this.setState({admin: user.is.admin})
		user.is.admin = !user.is.admin
		window.http.post('/api/user/updateadmin', user)
	 }
	 rendermakelist = ({item}) => (
	    <View>
	      		<View className='lowerborder'>
					<View data-label="User">
						<View className="cl-table-clients">
		 	  	 			<View  className="cl-table-clients__img">
								<Image source={item.avatarUrl} alt=""/>
							</View>
							<View className="cl-table-clients__info">
								<Text className="cl-table-clients__name">{item.name}</Text>
							</View>
						</View>
					</View>
					<Text data-label="E-mail">{item.email}</Text>
					<TouchableOpacity>
						<CheckBox value = {item.is.admin} onValueChange = {() =>{this.changeRole(item)}} />
					</TouchableOpacity>
					<TouchableOpacity  onPress = {() =>{this.deleteUser(item._id)}}>
						<View data-label="Actions">
							<Image source={Delete} style={{width: 30, height: 30}} alt="Button Delete"/> 
						</View>
					</TouchableOpacity>
				</View>
	    </View>
  )
	render(){

			return  <View>
			<FlatList
                  vertical
                  showsVerticalScrollIndicator={true}
                  numColumns={1}
                  data={this.props.users}
                  renderItem={this.rendermakelist}
                  keyExtractor={item => `${us._id}`}
                />
            </View>
	}
}


export default UsersList
