import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddressScreen from './src/screens/AddressScreen';
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen  from "./src/screens/ShoppingCartScreen";

export default function App() {
  return (
    <SafeAreaView>
      <ShoppingCartScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


