import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';

import Tarefas from './pages/Tarefas';
import Dashboard from './pages/Dashboard';

import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={
            {
              activeTintColor: 'tomato',
              inactiveTintColor: '#ccc'
            }
          }>
          <Tab.Screen
            name="Tarefas"
            component={Tarefas}
            options={
              {
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="playlist-check"
                    color={color}
                    size={32} />
                )
              }
            } />
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={
              {
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="view-dashboard"
                    color={color}
                    size={32} />
                )
              }
            } />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <Tarefas /> */}
    </SafeAreaView>
  );
}
