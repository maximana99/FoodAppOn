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
import { CartTab, MyCart, SignIn, Map } from './screens';
import { SignUp } from './screens';

import { CoordonateProvider } from './context/CoordonateProvider';
const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () =>{
  return (
    <Provider store={store}>
    <CoordonateProvider>
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
        <Stack.Screen
            name="SignIn"
            component={SignIn}
        />
         <Stack.Screen
            name="SignUp"
            component={SignUp}
        />
        <Stack.Screen
            name="MyCart"
            component={MyCart}
        />
        <Stack.Screen
            name="CartTab"
            component={CartTab}
        />
        <Stack.Screen
            name="Map"
            component={Map}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </CoordonateProvider> 
    </Provider>
  )
}

export default App