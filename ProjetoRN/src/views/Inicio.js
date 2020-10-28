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
    navigate('Perfil')
  };

  const colecao = () => {
    navigate('Colecao')
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bem vindos ao app</Text>
        <Text style={styles.subtitle}>O que deseja fazer?</Text>
        <TouchableOpacity style={styles.botaoPerfil} onPress={perfil}>
            <Text style={styles.botao}>Ver perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoColecao} onPress={colecao}>
            <Text style={styles.botao}>Ver colecao</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f6f6f6',
    padding: 20,
    backgroundColor: '#009fb7'
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#f7f7f7',
    marginBottom: 20,
  },
  botaoPerfil: {
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#0a1128',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
  },
  botaoColecao: {
    width: '100%',
    backgroundColor: '#0a1128',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
  },
  botao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});