import React from 'react';
import {Redirect} from 'react-router-native';
import Delete from '../../../../assets/deleteButton.png';
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
		checked: false,
		reload: false
	}
	deleteUser =(id) =>{
		this.state.us.delete(id);			
		}
	changeRole=(user)=>{
			user.is.admin = !user.is.admin
		window.http.post('/api/user/updateadmin', user)
	 }

	 rendermakelist = ({item}) => (
	    <TouchableOpacity>
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
					<View>
						<CheckBox type="checkbox" defaultChecked = {item.is.admin} onChange = {this.changeRole.bind(null, item)} />
					</View>
					<View >
						<View data-label="Actions">
							<Image source={Delete} style={{width: 30, height: 30}} alt="Button Delete"/> 
						</View>
					</View>
				</View>
	    </TouchableOpacity>
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
