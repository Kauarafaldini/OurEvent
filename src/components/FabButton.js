import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const FABButton = () => {

  const navigation = useNavigation(FABButton);

  const [icon_1] = useState(new Animated.Value(25));
  const [icon_2] = useState(new Animated.Value(25));
  const [icon_3] = useState(new Animated.Value(25));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 90,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return(
    <View>
      <Animated.View style={[styles.circle, { bottom: icon_1}]}>
        <TouchableOpacity>
          <Icon name="home" size={25} color="#FFFF" 
          onPress={() => navigation.navigate('Home') }/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2}]}>
        <TouchableOpacity>
          <Icon name="sign-out" size={25} color="#FFFF" 
          onPress={() => navigation.navigate('BemVindo') }/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle, { right: icon_3}]}>
        <TouchableOpacity>
          <Icon name="user" size={25} color="#FFFF" 
           onPress={() => navigation.navigate('Usuario') } />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <Icon name="th-list" size={25} color="#FFFF" />
      </TouchableOpacity>
      
    </View>
  )

}

export default FABButton;

const styles = StyleSheet.create({
  circle: {
    flex: 1,
     backgroundColor: '#000',
     width: 60,
     height: 60,
     position: 'absolute',
     bottom: 25,
     right: 25,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
  }
})