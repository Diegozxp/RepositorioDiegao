import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default function Perfil() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Diego e Henrique</Text>
      <Text style={styles.title}>diegohenrique@gmail.com</Text>
        <Image
          styles={styles.image}
          source={{ uri: 'https://github.com/diegozxp.png' }} 
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: '#4f4f4f',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    color: '#858690',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  }
});