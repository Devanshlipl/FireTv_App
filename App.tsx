import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenSaver } from './src/screens/screenSaver';
import { Dashboard } from './src/screens/dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenSaver" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="ScreenSaver" component={ScreenSaver} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
