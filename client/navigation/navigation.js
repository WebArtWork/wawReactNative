import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginContainer from '../src/guest/login/LoginContainer';
import ResetContainer from '../src/guest/reset/ResetContainer';
import SignContainer from '../src/guest/sign/signContainer';
import ProfileScreen from '../src/user/profile/ProfileScreen'; 
import UsersContainer from '../src/admin/users/userContainer'



const RootNavigation = createStackNavigator(
  {
  	Login: {
        screen: LoginContainer,
        navigationOptions: {
                headerShown: false
            }
        },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
                headerShown: false
            }
          },
    Reset: {
        screen: ResetContainer,
        navigationOptions: {
                headerShown: false
            }
        },
    Sign: {
        screen: SignContainer,
        navigationOptions: {
                headerShown: false
            }
        },
    Users: {
        screen: UsersContainer,
        navigationOptions: {
                headerShown: false
            }
        },
    },
)



export default createAppContainer(RootNavigation)
