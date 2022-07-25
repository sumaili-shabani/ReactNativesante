import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../../styles/global'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context';

const SettingsScreen = ({ navigation }) => {
  const {signOut} = React.useContext(AuthContext);
  const {toggleTheme} = React.useContext(AuthContext);
  const logout = (Message) => {
    alert("Message: " + Message);
  }


  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.header}>
        <Text style={globalStyles.text_header}>Settings Screen</Text>
      </View>

      <View style={globalStyles.footer}>

        <View style={globalStyles.action}>





        </View>
        <View style={globalStyles.fixToText}>
          <Button color={globalStyles.bgApk} title="Voir le Profil" onPress={() => Alert.alert('Left button pressed')} />
          <Button color={globalStyles.bgApk} title="Croud opération" onPress={() => {toggleTheme()}} />
        </View>
        

        <View style={globalStyles.action}>

          <Button
            onPress={() => {
              signOut();
            }}
            title="Déconnexion"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

      </View>







    </View>
  )
}

export default SettingsScreen