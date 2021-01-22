import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation/navigation';
import {RenderService} from 'wrcom';

import httpService from './src/services/http.service';
import userService from './src/services/user.service'

export default function App() {
	httpService('http://10.0.3.2:8080')
	userService()
	RenderService()
  return ( <RootNavigation/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
