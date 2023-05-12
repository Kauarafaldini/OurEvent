import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-web';

export default function Dt(props) {
    return (
        <TouchableOpacity>
        <View>
            
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
        <Image
        source={props.cover}
        style={StyleSheet.cover}
        />
        </ScrollView>
        <View>
        </View>

        </TouchableOpacity>


    )
}