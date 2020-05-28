import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import DangerRegister from './pages/DangerRegister';
import DangerList from './pages/DangerList';
import About from './pages/About';
import Draws from './pages/Draws';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerTransparent: true, headerTitle: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTransparent: true, headerTitle: false}}
        />

        <Stack.Screen
          name="DangerRegister"
          component={DangerRegister}
          options={{headerTransparent: true, headerTitle: false}}
        />

        <Stack.Screen
          name="DangerList"
          component={DangerList}
          options={{headerTransparent: true, headerTitle: false}}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{headerTransparent: true, headerTitle: false}}
        />

        <Stack.Screen
          name="Draws"
          component={Draws}
          options={{headerTransparent: true, headerTitle: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
