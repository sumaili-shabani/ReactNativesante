import React, { Component, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

import ProfilePage from './Components/Pages/profile';

import { globalStyles } from './styles/global';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      nom: "Roger",
      prenom: "Sumaili",
      age: 24

    },
    {
      id: 2,
      nom: "Jeremie",
      prenom: "Bushiri",
      age: 30

    },
    {
      id: 3,
      nom: "Kisimba",
      prenom: "Lola",
      age: 18

    },
    {
      id: 5,
      nom: "Feza fataki",
      prenom: "Sarah",
      age: 24

    }

  ]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Liste des utilisateurs</Text>
      <FlatList

        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Profile', item)}
          >
            <View>
              <Text>{item.nom}</Text>
              <Text>{item.age}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Go to Profile"
        style={globalStyles.btn}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10, marginBottom: 20 }}>
      <Text>Details Screen</Text>

      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <FontAwesome.Button name="facebook" backgroundColor="#3b5998">
          Login with Facebook
        </FontAwesome.Button>
      </View>

      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <FontAwesome.Button name="twitter" backgroundColor="#4169e1" >
          Login with Twitter
        </FontAwesome.Button>
      </View>

      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <FontAwesome.Button name="google" backgroundColor="#dc143c" >
          Login with Google
        </FontAwesome.Button>
      </View>





      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  );
}



const Stack = createNativeStackNavigator();

function App() {
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //     <Stack.Screen
    //       name="Profile"
    //       component={ProfilePage}
    //       options={{

    //         headerTitle: (props) => <LogoTitle {...props} />,
    //         headerRight: () => (
    //           <View>
    //             <Ionicons name="md-checkmark-circle" size={32} color="green" />

    //           </View>

    //         ),
    //       }}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>

    
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';

            } else if (route.name === 'Details') {
              iconName = focused ? 'md-map' : 'ios-map-outline';
            }
            else if (route.name === 'News') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-add-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="News" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        {/* <Tab.Screen name="Profile" component={ProfilePage} /> */}

        
        
      </Tab.Navigator>

     
      
    </NavigationContainer>



  );
}



export default App;
