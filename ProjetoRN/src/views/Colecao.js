import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
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
    <SafeAreaView>
      <Text>Bikes iradas</Text>

      <FlatList
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ height: 80 }}
        numColumns={2}
        keyExtractor={item => item.id}
        data={bicicletas}
        renderItem={({ item }) => (
          <View styles={styles.card}>
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
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
  },
  name: {
    fontSize: 22,
    color: '#4f4f4f',
    fontWeight: 'bold',
  },
  card: {
    height: 100,
  },
});