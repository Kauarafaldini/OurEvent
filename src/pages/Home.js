import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Novo from '../components/Novo';
import Eventos from '../components/Eventos';
import Recommended from '../components/Recommended';
import FABButton from '../components/FabButton';

export default function Home() {
  const navigation = useNavigation(Home);
 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#023047' }}
  >
    
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Eventos Pagos</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
      <Novo
       cover={require('../../assets/gl.png')} 
       name="Reunião Google"
       description="Reunião dos Membros do alto conselho do Google"
       price="R$ 100"
       onPress={ () => navigation.navigate('Event')}
      />

      <Novo
       cover={require('../../assets/wz.png')} 
       name="Reunião Waze"
       description="Atualização dos termos do App"
       price="R$ 250"
       onPress={ () => navigation.navigate('Event2')}
      />

      <Novo
       cover={require('../../assets/ts.png')} 
       name="Lançamento Tesla Model S"
       description="Evento de lançamento do novo espotivo da Tesla"
       price="R$ 1.500"
       onPress={ () => navigation.navigate('Event3')}
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Adicionados Recentemente</Text>
    </View>  

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <Eventos
      cover={require('../../assets/pv4.png')}
      description="Debate politico"
      description2='Debate entre candidatos a presidencia'
      />
      <Eventos
      cover={require('../../assets/pv5.png')}
      description="Tesla"
      description2='Debate sobre o novo tesla model S'
      />
      <Eventos
      cover={require('../../assets/pv6.png')}
      description="Novo Iphone"
      description2='Lancamento do novo Iphone 14'
      />
    </ScrollView>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Eventos Gratis</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15}}>
      <Novo
       cover={require('../../assets/pv1.jpg')} 
       name="Reunião Google"
       description="Reunião dos Membros do alto conselho do Google"
       onPress={() => navigation.navigate('Event4') }
      />

      <Novo
       cover={require('../../assets/pv2.jpg')} 
       name="Reunião Waze"
       description="Atualização dos termos do App"
       onPress={ () => navigation.navigate('Event5')}
      />

      <Novo
       cover={require('../../assets/ts.png')} 
       name="Lançamento Iphone"
       description="Evento de lançamento do novo iphone 14"
       onPress={ () => navigation.navigate('Event6')}
      />

    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Finalizados
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
      <Recommended
        cover={require('../../assets/pv1.jpg')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparecer"
      />
      <Recommended
        cover={require('../../assets/pv4.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparecer"
      />
      <Recommended
        cover={require('../../assets/ts.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparacer"
      />
    </ScrollView>
    
    <FABButton/>
    
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  title:{
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#FFF'
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#edf6f9',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
});