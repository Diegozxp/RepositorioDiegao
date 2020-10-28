import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const bicicletas = [
  {
    id: 1,
    name: 'Bicicleta Cross',
    image: 'https://static.netshoes.com.br/produtos/bicicleta-cross-bmx-aro-20-/33/EEX-0004-833/EEX-0004-833_zoom1.jpg?ts=1591181420&ims=544x'
  },
  {
    id: 2,
    name: 'Bicicleta de marcha',
    image: 'https://i.zst.com.br/images/bicicleta-colli-bikes-21-marchas-aro-20-suspensao-full-suspension-freio-v-brake-gps-310-photo28018527-12-12-17.jpg'
  },
  {
    id: 3,
    name: 'Bicicleta classica/old school',
    image: 'https://http2.mlstatic.com/D_NQ_NP_921912-MLB40089672714_122019-O.jpg'
  },
  {
    id: 4,
    name: 'Bicicleta Harry potter',
    image: 'https://cdn.awsli.com.br/600x700/985/985891/produto/41333122/38ca880577.jpg'
  },
]

export default function Colecao() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bikes Iradas</Text>

      <FlatList
        style={{ flex: 1 }}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 80 }}
        keyExtractor={item => item.id}
        data={bicicletas}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#009fb7'
  },
  title: {
    marginTop: 20,
    color: '#fff',
    fontSize: 22,
    marginVertical: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 120,
    width: 120,
  },
  name: {
    fontSize: 16,
    color: '#222',
  },
  card: {
      alignItems: 'center',
      justifyContent: 'center',
   padding: 20,
   borderRadius: 8,
   backgroundColor: '#fff',
   marginBottom: 10,
   shadowOffset:{  width: 0,  height: 4,  },        
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 1.0,
  },
});