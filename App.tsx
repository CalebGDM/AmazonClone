import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen'


export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


