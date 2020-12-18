import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {NativeRouter as Router, Switch, Route} from 'react-router-native';
import http from './src/services/http.service';
import user from './src/services/user.service';
//import {render} from 'wrcom';


import Login  from './src/pages/guest/login/login_container';
import SignUp from './src/pages/guest/sign/sign_container';
import ForgotPassContainer from './src/pages/guest/reset/reset_container'
import ProfilePage from './src/pages/user/profile/profile_container';
import UsersContainer from './src/pages/admin/users/userContainer'


const App: () => React$Node = () => {
  http('http://10.0.3.2:8080');
  user();
 // render();
  return (
   <>
      <View>
        <Router>
          <Switch>
            <Route exact path="/" component ={Login}/>
            <Route  path="/signup" component ={SignUp}/>
            <Route  path="/reset" component ={ForgotPassContainer}/>
            <Route path="/profile" component ={ProfilePage}/>
            <Route path="/admin/users"  component ={UsersContainer}/>
          </Switch>
        </Router>
      </View>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;


