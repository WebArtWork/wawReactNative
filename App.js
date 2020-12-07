import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter as Router, Switch, Route} from 'react-router-native';
import {HttpService} from 'wrcom';

import Login  from './src/pages/guest/login/login_container';
import Profile from './src/pages/user/profile/profile';


const App: () => React$Node = () => {
  HttpService();
  return (
   <>
      <View>
        <Router>
          <Switch>
            <Route exact path="/" component ={Login}/>
             <Route path="/profile" component ={Profile}/>
          </Switch>
        </Router>
      </View>
    </>
    );
};

const styles = StyleSheet.create({

});

export default App;
