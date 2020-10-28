import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Inicio() {
  const { navigate } = useNavigation();

  const perfil = () => {
    navigate('Profile')
  };

  const colecao = () => {
    navigate('Colecao')
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text>Bem vindos ao app</Text>
      <Text>O que deseja fazer?</Text>

      <View style={styles.content}>
        <TouchableOpacity onPress={perfil}>Ver perfil</TouchableOpacity>
        <TouchableOpacity onPress={colecao} >Ver coleção</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f6f6f6'
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
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
  botaoPerfil: {
    backgroundColor: '#345dd1',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoColecao: {
    backgroundColor: '#d7263d',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});