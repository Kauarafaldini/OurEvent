import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as Animatable from 'react-native-animatable'

import axios from 'axios';

export default function Cadastro () {

    const [cliente, setCliente] = useState({
        nome:'',
        email:'',
        senha:'',
        cfsenha:'',
        fone:'',
    })

    const [mensage,setMensage] = useState("")

    const vlInput = (name, value) => setCliente({ ...cliente, [name]: value });

    const enviarmsg = async (e) => {

        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const retorno = await axios.post('http://localhost/8080/clientes', cliente, {headers});

            setMensage(retorno.data.mensage);

            setCliente({
                nome:'',
                email:'',
                senha:'',
                cfsenha:'',
                fone:'',
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.data.mensage) {
              setMensage(error.response.data.mensage);
            } else {
              setMensage("Error: Cadastro não efetuado. Por favor, tente novamente.");
            }
          }
        };

    const schema = yup.object({
        username: yup.string().required("Insira o Nome de Usuário"),
        email: yup.string().email("Insira um E-mail valido").required("Insira o E-mail"),
        senha: yup.string().min(6, "A senha deve conter 6 digitos").required("Insira uma Senha"),
        cfsenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não correspondem'),
        telefone: yup.string().min(11, "Insira um número existente").required("Insira um número de Telefone"),
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
        
    });

    const navigation = useNavigation();

    function register(dados){
    axios
    .post('https://localhost/clientes', dados)
    .then(response => {
      console.log('Cadastro efetuado: ', response.data);
      navigation.navigate('Home');
    })
        .catch(error => {
            console.error('Erro ao enviar o Cadastro:', error);
        })
    }

    return (
        <ScrollView style={styles.background}>
        <Animatable.View animation="fadeInDown" delay={300} style={styles.anim1}>
            <Text style={styles.text2}>Cadastre-se</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.corpo}>
            <Text style={styles.text3}>Nome de Usuario</Text>
            
            <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                placeholder='NoobMaster69'
                style={styles.input}
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

            <Text style={styles.text3}>Confirmar senha</Text>
            <Controller
            control={control}
            name='cfsenha'
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
            />
            )}/>

            {errors.cfsenha && <Text style={styles.erro}>{errors.cfsenha?.message}</Text>}

            <Text style={styles.text3}>Telefone</Text>
            <Controller
            control={control}
            name="telefone"
            render={({ field: { onChange, onBlur, value}}) => (
            <TextInput
                style={styles.input}
                placeholder='(12) 34567-8901'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
            />
            )}/>
            {errors.telefone && <Text style={styles.erro}>{errors.telefone?.message}</Text>}

            <TouchableOpacity 
                onPress={handleSubmit(data => register(data)) }
                style={styles.botao}>

                <Text style={styles.botaotexto}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao2}
                onPress={ () => navigation.navigate('Login')}>

                <Text style={styles.botaotexto2}>Voltar</Text>
            </TouchableOpacity>

        </Animatable.View>

        </ScrollView>
    );
}
    
    const styles = StyleSheet.create({
        corpo:{
            backgroundColor: '#969ba2',
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingLeft: '10%',
            paddingRight: '10%',
            
            
        },
        text3: {
            fontSize: 15,
            marginTop: 22,
            marginTop: '10%',
        },
        input: {
            borderBottomWidth: 1,
            height: 35,
            marginBottom: 5,
            fontSize: 14,
            marginTop: '2%',
        },
        background:{
          flex:1,
          backgroundColor: '#023047',
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
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 16,
        },
        botaotexto2:{
            color: '#FFF',
            fontSize: 14,
            fontWeight: 'bold',
        },
        erro:{
            alignSelf: 'flex-start',
            color: '#f43',
            marginBottom: 8,
        }

});