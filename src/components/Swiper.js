import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';


export default function SwiperComponent(props) {
 return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
     backgroundColor: '#000',
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   activeDotColor="#FFF"
   activeDotStyle={{
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   >

     <View style={styles.slide}>
     <Image
      source={props.cover}
      style={{ width: '100%', height: '100%', borderWidth: 10, borderRadius: 25,}}
      />
     </View>

     <View style={styles.slide}>
     <Image
      source={props.cover2}
      style={{ width: '100%', height: '100%', borderWidth: 10, borderRadius: 25}}
      />
     </View>

     <View style={styles.slide}>
     <Image
      source={props.cover3}
      style={{ width: '100%', height: '100%', borderWidth: 10, borderRadius: 25}}
      />
     </View>

   </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper:{

  },
  slide:{
    flex:1,
    paddingTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    
  }
})