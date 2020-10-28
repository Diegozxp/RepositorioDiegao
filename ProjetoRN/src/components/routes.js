import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from '../views/Inicio';
import Colecao from '../views/Colecao';
import Perfil from '../views/Perfil';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Colecao" component={Colecao} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}