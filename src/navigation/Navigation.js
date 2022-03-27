// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import Ordering from '../../screens/Ordering';
import Canceling from '../../screens/Canceling';
import Others from '../../screens/Others';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ordering" component={Ordering} />
        <Stack.Screen name="Canceling" component={Canceling} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;