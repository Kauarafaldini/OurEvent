import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {View, StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as Animatable from 'react-native-animatable'


const schema = yup.object({
  username: yup.string().required("Insira o Nome de Usuário"),
  email: yup.string().email("Insira um E-mail valido").required("Insira o E-mail"),
  telefone: yup.string().min(11, "Insira um número existente").required("Insira um número de Telefone"),
})

export default function Redefinir () {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
    
})

const navigation = useNavigation(Redefinir);

function redefinir(dados){
    console.log(dados);
    navigation.navigate('Login')
}
    return (
      <ScrollView style={Styles.background}>
        <View style={Styles.logo}>
          <Animatable.Image
            delay={500}
            animation="fadeInDown"
            source={require('../../assets/logo2.png')}
            style={ { width: '100%'}}
            resizeMode='contain'
            />
        </View>
        
        <Animatable.View animation="fadeInUp" style={Styles.corpo}>
        <Text style={Styles.text3}>Usuario</Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value}}) => (
          <TextInput
            placeholder='NoobMaster69'
            style={Styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}/>
        {errors.username && <Text style={Styles.erro}>{errors.username?.message}</Text>}

        <Text style={Styles.text3}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value}}) => (
          <TextInput
            style={Styles.input}
            placeholder='OurEvent@Gmail.com'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}/>
        {errors.email && <Text style={Styles.erro}>{errors.email?.message}</Text>}

        <Text style={Styles.text3}>Telefone</Text>
        <Controller
          control={control}
          name="telefone"
          render={({ field: { onChange, onBlur, value}}) => (
          <TextInput
            style={Styles.input}
            placeholder='(12) 34567-8901'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}/>
        {errors.telefone && <Text style={Styles.erro}>{errors.telefone?.message}</Text>}

        <TouchableOpacity 
          onPress={handleSubmit(redefinir) }
          style={Styles.botao}>
          <Text style={Styles.botaotexto}>Redefinir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.botao2}
        onPress={ () => navigation.navigate('Login')}>
        <Text style={Styles.botaotexto2}>Voltar</Text>
        </TouchableOpacity>
        </Animatable.View>
        </ScrollView>
    );
}        
    const Styles = StyleSheet.create({
            background:{
              flex:1,
              backgroundColor: '#023047',
            },
            logo:{
              justifyContent: 'center',
              flex:0.5,
              position: 'relative',
            },
            corpo:{
              backgroundColor: '#969ba2',
              flex: 1,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              paddingStart: '10%',
              paddingEnd: '10%',
            },
            input:{
              borderBottomWidth: 1,
              height: 40,
              marginBottom: 4,
              fontSize: 18,
              marginTop: '2%',
            },
            text3: {
              fontSize: 20,
              marginTop: 28,
              marginTop: '10%',
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
              marginVertical: 15,
              
          },
          botaotexto2:{
              color: '#FFF',
              fontSize: 14,
              fontWeight: 'bold',
          },
});
