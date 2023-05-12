import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Eventos( props ) {
 return (
   <View style={styles.container}>
     <View>
       <Image
       source={props.cover}
       style={styles.cover}
       />
     </View>

     <View style={styles.content}>
     <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.description2}>{props.description2}</Text>
    </View>

    <View style={styles.dot}>
      </View>

      <Text style={styles.text}>Novo</Text>
    

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#edf6f9',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 2,
    borderRadius: 10,
  },
  cover:{
    borderRadius: 10,
    width: 60,
    height: 60
  },
  content:{
    width: '65%',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    height: '100%'
  },
  description:{
    flex: 1,
    fontSize: 15,
    alignContent: 'flex-start'
  },
  description2:{
    flex: 1,
    fontSize: 9,
    alignContent: 'flex-start'
  },
  price:{
    fontSize: 12,
  },
  dot:{
    width: 7,
    height: 7,
    borderRadius:4,
    backgroundColor: 'red',
    marginHorizontal: 1,
  },
  text:{
    color: 'red',
    fontSize:10,
  },
});