import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Tarefas from './pages/Tarefas';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tarefas />
    </SafeAreaView>
  );
}