import React from 'react';
import { StyleSheet, ImageBackground, Text} from 'react-native';


export default function Recommended({ cover, textin, gracy }) {
 return (
   <ImageBackground
   source={cover}
   style={styles.container}
   blurRadius={3}
   >
     <Text style={[styles.textin, styles.shadow]}>
       {textin}
     </Text>

     <Text style={[styles.description, styles.shadow]}>
       {gracy} S2
     </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#edf6f9',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
  },
  textin:{
   color: '#FFF',
   fontSize: 15,
  },
  description:{
    fontSize: 12,
    color: '#FFF',
  },
  shadow:{
    textShadowOffset: { width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#FFD100'
  }
});