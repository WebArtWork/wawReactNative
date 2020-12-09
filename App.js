import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter as Router, Switch, Route} from 'react-router-native';
import {HttpService} from 'wrcom';
import user from './src/services/user.service'


import Login  from './src/pages/guest/login/login_container';
import SignUp from './src/pages/guest/sign/sign_container';
import ForgotPassContainer from './src/pages/guest/reset/reset_container'
import Profile_Page from './src/pages/user/profile/profile_container';


const App: () => React$Node = () => {
  HttpService();
  return (
   <>
      <View>
        <Router>
          <Switch>
            <Route exact path="/" component ={Login}/>
            <Route  path="/signup" component ={SignUp}/>
            <Route  path="/reset" component ={ForgotPassContainer}/>
            <Route path="/profile" component ={Profile_Page}/>
          </Switch>
        </Router>
      </View>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
