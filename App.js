
import React, { Component, useEffect, useState } from 'react';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';


import {
  Button,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,


} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { globalStyles } from './styles/global';

import HomePage from './Components/Pages/HomePage';

import RootStackScreen from './screem/routeScreem';
import AppStack from './screem/AppStack';
import { ActivityIndicator } from 'react-native-paper';

//importation de la navigation
import AdminTempletPage from './Components/Pages/AdminTemplete';
import ProfileScreen from './Components/Pages/ProfileScreen';
import SettingsScreen from './Components/Pages/setingScreem';
import NewScreen from './Components/Pages/NewScreen';
import MapScreen from './Components/Pages/MapScreen';

import GameDetailsScreen from './Components/Pages/composant/GameDetailsScreen.js';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { AuthContext } from './Components/context';
import Hommecreen from './Components/Pages/composant/HomeScreen';


//debit script

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AdminTempletPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};
//fin importation de la navigation




function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userData, setuserData] = React.useState(true);
  //dataState
  const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  //theme debit
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  //fin theme

  //reduce
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  //contex

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }


  }), []);

  //fin contex
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  else {

    return (

      <AuthContext.Provider value={authContext}>

        <NavigationContainer>

          {
            loginState.userToken !== null ?
              (
                <Tab.Navigator
                  screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: '#009387' },
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                  }}
                >
                  <Tab.Screen
                    name="News"
                    component={NewScreen}

                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-information-circle" color={color} size={size} />
                      ),
                      tabBarBadge: 15

                    }}

                  />
                  <Tab.Screen
                    name="Home2"
                    component={HomeStack}
                    options={({ route }) => ({
                      tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: globalStyles.bgApk,
                      },
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                      ),
                    })}
                  />

                  <Tab.Screen
                    name="MapScreen"
                    component={MapScreen}

                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-map" color={color} size={size} />
                      ),
                      tabBarBadge: 3

                    }}

                  />

                  <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}

                    options={{
                      tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-settings" color={color} size={size} />
                      ),

                    }}

                  />



                </Tab.Navigator>
              )
              :
              (


                <RootStackScreen />
              )
          }



          {/* <AppStack /> */}
          {/*<RootStackScreen />*/}

          {/*  <RootStackScreen /> */}



        </NavigationContainer>


      </AuthContext.Provider>


    );

  }

}

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if (routeName == 'GameDetails') {
    return 'none';
  }
  return 'flex';
};



export default App;
