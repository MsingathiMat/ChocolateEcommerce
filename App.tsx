import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './navigators/BottoTabs';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator screenOptions={{

        headerShown:false
      }}>
        <Stack.Screen name="HomeCart" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;