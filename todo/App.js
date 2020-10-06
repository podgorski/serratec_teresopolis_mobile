import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import AppRoutes from './routes/app.routes';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      {/* <Tarefas /> */}
    </SafeAreaView>
  );
}
