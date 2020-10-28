import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function Perfil() {
  return(
    <SafeAreaView style={styles.container}>
         <Image
          style={styles.image}
          source={{ uri: 'https://github.com/diegozxp.png' }} 
        />
      <Text style={styles.title}>Diego</Text>
      <Text style={styles.subtitle}>diego@gmail.com</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009fb7'
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  }
});