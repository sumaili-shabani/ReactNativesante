import React, { Component, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';



import { globalStyles } from "../../styles/global";

export default function TempletePage({ navigation }) {

    return (
        <View style={globalStyles.container}>

            <View style={globalStyles.header}>
                <Text style={globalStyles.text_header}>Tamplete</Text>
                <Text style={globalStyles.text_sous_title_header}>Tamplete default Component</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={globalStyles.footer}
            >
                <ScrollView>
                    <View>

                        <Text style={globalStyles.Sous_title_header}>What is Lorem Ipsum?</Text>
                        <Text>


                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        
                    </View>
                </ScrollView>

            </Animatable.View>


        </View>
    )
}