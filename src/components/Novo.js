import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Novo(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
     <Image
      source={props.cover}
      style={styles.cover}
     />

     <View style={styles.content}>
      <Text style={styles.title}>{props.name}</Text>

     </View>

     <Text style={styles.description}>
       {props.description}
     </Text>

     <View style={styles.footer}>
      <View style={{width: '80%'}}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
      <View style={{width: '20%'}}>
        <Ionicons name="ios-add-circle" size={24} color="#000" />
      </View>
     </View>
     

   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    backgroundColor: '#edf2f4',
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover:{
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content:{
   flexDirection: 'row',
   alignItems: 'center',
   marginVertical: 10, 
  },
  title:{
    fontSize:12,
    color: '#000'
  },
  description:{
    fontSize: 9,
    color:'#000'
  },
  footer:{
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%'
  },
  price:{
    fontSize: 15,
    flex:1,
    alignItems:'baseline',
    color: '#000'
  }
});