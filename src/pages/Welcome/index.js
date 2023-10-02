
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function BemVindo () {
    const navigation = useNavigation();

    return (
        <View style={styles.conteiner}>
            <View style={styles.logo}>
                <Animatable.Image
                    delay={500}
                    animation="fadeInLeft"
                    source={require('../../../assets/logo2.png')}
                    style={ { width: '100%'}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View animation='fadeInUp' style={styles.corpo}>
                <Text style={styles.title1}>Meu Evento, Seu Evento, Nosso Evento</Text>
                <Text style={styles.title2}>Faça o Login para iniciar sua experiencia</Text>
            <TouchableOpacity 
            onPress={ () => navigation.navigate('Login')}
            style={styles.botao}>
                <Text style={styles.text}>Acessar</Text>
            </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#023047',
    },
    logo:{
        flex:2,
        backgroundColor: '#023047',
        justifyContent: 'center',
        alignItems: 'center'
    },
    corpo:{
        flex:1,
        backgroundColor:'#969ba2',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart: '15%',
        paddingEnd: '15%',
        paddingTop: '3%'
    },
    title1:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    botao:{
        position: 'absolute',
        backgroundColor:'#023047',
        borderRadius: 10,
        paddingVertical: 8,
        paddingTop: '3%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: '10%',
        width: '60%',
    },
    text:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})
