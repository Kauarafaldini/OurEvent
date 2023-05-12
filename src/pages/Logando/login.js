import React from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';

const schema = yup.object({
    username: yup.string().required("Insira o Nome de Usuário"),
    email: yup.string().email("Insira um E-mail valido").required("Insira o E-mail"),
    senha: yup.string().min(6, "A senha deve conter 6 digitos").required("Insira uma Senha"),
})

export default function Login () {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        
    })

    const navigation = useNavigation(Login)

    function SingIn(data){
        console.log(data);
        navigation.navigate('Home')
    }

    return (
        <ScrollView style={styles.conteiner}>
            <Animatable.View animation="fadeInDown" delay={500} style={styles.anim1}>
                <Text style={styles.text2}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.corpo}>
            <Text style={styles.text3}>Nome de Usuario</Text>

            <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                placeholder='NoobMaster69'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
            />
            )}/>
            {errors.username && <Text style={styles.erro}>{errors.username?.message}</Text>}
            
            <Text style={styles.text3}>E-mail</Text>
            <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                placeholder='OurEvent@Gmail.com'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
            />
            )}/>
            {errors.email && <Text style={styles.erro}>{errors.email?.message}</Text>}

            <Text style={styles.text3}>Senha</Text>
            <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                placeholder='Inserir Senha'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
            />
            )}/>
            {errors.senha && <Text style={styles.erro}>{errors.senha?.message}</Text>}
            
            <TouchableOpacity 
            onPress={handleSubmit(SingIn) }
            style={styles.botao}>
                <Text style={styles.botaotexto}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Cadastro')}
            style={styles.botao2}>
                <Text style={styles.botaotexto2}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Redefinir')}
            style={styles.botao3}>
                <Text style={styles.botaotexto3}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            </Animatable.View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor: '#023047'
    },
    anim1:{
        marginTop: '15%',
        marginBottom: '8%',
        paddingStart: '15%',
    },
    text2:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    corpo:{
        backgroundColor: '#969ba2',
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingStart: '10%',
        paddingEnd: '10%',
    },
    text3: {
        fontSize: 20,
        marginTop: 28,
        marginTop: '10%',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 18,
        marginTop: '2%',
    },
    botao:{
        backgroundColor: '#023047',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaotexto:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    botao2:{
        backgroundColor: '#023047',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    botaotexto2:{
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    botao3:{
        marginTop:14,
        alignSelf: 'center',
        marginVertical: 109,

    },
    botaotexto3:{
        color: 'white'
    },
    erro:{
        alignSelf: 'flex-start',
        color: '#f43',
        marginBottom: 8,
    }

})