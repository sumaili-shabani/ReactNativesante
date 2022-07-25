import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import AdminTempletPage from '../Components/Pages/AdminTemplete';
import HomePage from '../Components/Pages/HomePage';
import LoginPage from '../Components/Pages/Login';
import RegisterPage from '../Components/Pages/Register';





const Stack = createNativeStackNavigator();



const RootStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="AdminTempletPage" component={AdminTempletPage} />
        
      </Stack.Navigator>
    );
  };
  
export default RootStackScreen;

