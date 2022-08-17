import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, } from 'react-native';
import { useFonts, Cinzel_400Regular, Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/Cesta'

export default function App() {
  const[fontCarregada] = useFonts({
    "CinzelRegular": Cinzel_400Regular,
    "CinzelBold": Cinzel_700Bold
  })
  if(!fontCarregada){
    return <AppLoading/>
  }
  return (
    <SafeAreaView>
    
      <StatusBar />
      <Cesta {...mock} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
