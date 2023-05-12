import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Stars from 'react-native-stars';

import SwiperComponent from '../../components/Swiper';
import FABButton from '../../components/FabButton';

export default function Event3() {
  const navigation = useNavigation(Event3);
 return (
   <View style={styles.container}>
     <View style={styles.swiperContent}>
        <SwiperComponent
        cover={require('../../../assets/ms1.png')}
        cover2={require('../../../assets/ms2.png')}
        cover3={require('../../../assets/ms3.png')}
        />
     </View>

    <View style={styles.headerContent}>
      <View style={{ width: '65%' }}>
        <Text style={styles.text1}>Lançamento Tesla Model S</Text>
      </View>

      <View style={{ width: '35%' }}>
        <Text style={styles.estrelas}>Avaliação</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Stars
           default={0} 
           count={5}
           half={true}
           starSize={20}
           fullStar={ <Ionicons name="md-star" size={20} style={styles.myStarStyle} /> }
           emptyStar={ <Ionicons name="md-star-outline" size={20} style={styles.myStarStyle} /> }
           halfStar={  <Ionicons name="md-star-half" size={20} style={styles.myStarStyle} /> }
          />
        </View>
      </View>
    </View>

    <Text style={styles.preco}>
      R$ 1.500
    </Text>
    <View style={styles.divisor}>
      <View style={styles.divisorline}></View>
    </View>
    <Text style={styles.description}>
     Super Evento de lançamento do novo Tesla model X
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35 }}>
      <View style={styles.slide}>
        <Image
        source={require('../../../assets/ms1.png')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../../../assets/ms2.png')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../../../assets/ms3.png')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>
    </ScrollView>

    <View>
    <FABButton/>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#023047'
  },
  swiperContent:{
    flexDirection: 'row',
    height: 240,
    width: '100%',
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  text1:{
    fontSize: 18,
    color: '#edf6f9'
  },
  estrelas:{
    fontSize: 9,
    color: '#edf6f9'
  },
  myStarStyle:{
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  preco:{
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'white'
  },
  description:{
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  },
  divisor:{
    marginTop: '5%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorline:{
    width: '95%',
    height: 2,
    backgroundColor: '#fff'
  }
});