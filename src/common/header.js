import React from 'react'
import {Link} from "react-router-native";

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

export default function HeaderUser(props){
	const us = {};  //window.us
	return ( 
	<View className="topbar">
		<View className="topbar-left">
			{/*us.is.admin ?  <Link className="topbar__link" to='/admin/users'><Text>Users</Text></Link> : ''*/}
		</View>
		<View className="topbar-right">
			<Link className="topbar__link _img" to="/profile">
				<Image  className="profile-img" src={us.avatarUrl} alt='User Avatar'/>
			</Link>
		</View>
	</View>)
}
