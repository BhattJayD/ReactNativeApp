import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Splash from './Screens/Splash';



const Stack = createStackNavigator();
if (Text.defaultProps == null) Text.defaultProps = {};
if (Image.defaultProps == null) Image.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
Image.defaultProps.allowFontScaling = false;

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}
