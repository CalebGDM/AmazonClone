import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaView>
      <ProductScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


