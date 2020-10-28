import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/components/routes';


export default function App() {
  return (
    <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </NavigationContainer>
  );
}

