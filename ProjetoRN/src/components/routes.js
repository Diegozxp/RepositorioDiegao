import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../views/Inicio';
import Colecao from '../views/Colecao';
import Perfil from '../views/Perfil';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{
          headerTintColor: '#fff',
          headerStyle: {
              backgroundColor: '#009fb7',
              borderBottomWidth: 0,
          },
      }} name="Inicio" component={Inicio} />
      <Stack.Screen options={{
          headerTitle: '',
          headerStyle: {
              backgroundColor: '#009fb7',
              borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
      }} name="Colecao" component={Colecao} />
      <Stack.Screen options={{
          headerTintColor: '#fff',
          headerStyle: {
              backgroundColor: '#009fb7',
              borderBottomWidth: 0,
          },
      }}  name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}