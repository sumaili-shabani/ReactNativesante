import React from "react";
import { Text, View, Button } from "react-native";

import { globalStyles } from '../../styles/global';

export default function Profile({ route, navigation }) {
    const item = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>Mon profileProlie screen</Text>

            <Text>Id: {item.id}</Text>
            <Text>Nom: {item.nom}</Text>
            <Text>PostNom: {item.prenom} </Text>
            <Text>Age: {item.age} </Text>


            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
