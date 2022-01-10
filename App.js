import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomDrawer from './navigation/CustomDrawer';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './screens/Authentication/Login';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';


const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () =>{
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
              headerShown : false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
              name="Home"
              component={Login}//in loc de customDrower plus import
              
        />
        <Stack.Screen
              name="Layout"
              component={CustomDrawer}//in loc de customDrower plus import
              
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App