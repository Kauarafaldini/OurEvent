import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';

import * as ImagePicker from 'expo-image-picker';

import ImgVw from '../components/ImgView';
import But from '../components/BtImg';
import Recommended from '../components/Recommended';

const PlaceholderImage = require('../../assets/pv2.jpg');

export default function Usuario() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    } else {
      alert('Você não selecionou uma Foto.');
    }
  };
  return (
    <View style={styles.container}>      
      <View style={styles.imageContainer}>        
        <ImgVw 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage} />        
      </View>
      <View style={styles.divisor}>
        <View style={styles.divisorline}></View>
      </View>
      <View style={styles.back}>
        <Text style={styles.text1}>Nome:</Text>
        <Text style={styles.text2}>NoobMaster69</Text>
        <Text style={styles.text1}>E-mail:</Text>
        <Text style={styles.text2}>OurEvent@Gmail.com</Text>
        <Text style={styles.text5}>Eventos confirmados:</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10}}>
        <Recommended
        cover={require('../../assets/ts.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparacer"
        />
        <Recommended
        cover={require('../../assets/wz.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparacer"
        />
        <Recommended
        cover={require('../../assets/gl.png')}
        textin="Evento Finalizado"
        gracy="Obrigado por comparacer"
        />
        </ScrollView>
        <But theme="primary" label="Choose a photo" onPress={pickImageAsync} style={{paddingHorizontal: 10}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023047',
    alignItems: 'center',
  },
  imageContainer: {
    flex:0.5, 
    paddingTop: 58,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: '#f45',
  },
  back:{
    flex:1,
    backgroundColor:'#969ba2',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%',
    paddingTop: '10%'
  },
  text1:{
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  },
  text2:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 18,
    marginTop: '2%',
  },
  text5:{
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  },
});