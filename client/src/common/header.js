import React from 'react'
import {Link} from "react-router-native";

import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

export default function HeaderUser(props){
	const us = window.us
	return ( 
	<View style={styles.topbar}>
		<View style={styles.topbar_left}>
			{us.is.admin ?  <Link style={styles.topbar__link} to='/admin/users'><Text>Users</Text></Link> : <Text></Text>}
		</View>
		<View style={styles.topbar_right}>
			<Link style={styles.topbar__link, styles._img} to="/profile">
				<Image  style={styles.profile_img} source={us.avatarUrl} alt='User Avatar'/>
			</Link>
		</View>
	</View>)
}


let styles = StyleSheet.create({
	topbar:{

	},
	topbar_left:{

	},
	topbar__link:{

	},
	topbar_right:{

	},
	_img:{

	},
	profile_img:{
		
	}
});