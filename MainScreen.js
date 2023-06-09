import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate('MenuPrincipal.js');
  };

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} showsPagination={true}>
        <View style={styles.slide}>
          <Image source={require('./assets/background1.jpeg')} style={styles.backgroundImage} />
          {/* Contenido de la primera pantalla */}
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/background2.jpeg')} style={styles.backgroundImage} />
          {/* Contenido de la segunda pantalla */}
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/background3.jpeg')} style={styles.backgroundImage} />
          {/* Contenido de la tercera pantalla */}
        </View>
        <View style={styles.slide}>
          <Image source={require('./assets/background4.jpeg')} style={styles.backgroundImage} />
          <TouchableOpacity style={styles.button} onPress={handleMenuPress}>
            <Text style={styles.buttonText}>Menu Principal</Text>
          </TouchableOpacity>
          {/* Contenido de la cuarta pantalla */}
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default MainScreen;
