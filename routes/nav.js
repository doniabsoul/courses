import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Settings from '../src/Screens/Settings';
import Home from '../src/Screens/Home';
const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.settings} component={settings} />
        <Stack.Screen name={ScreenNames.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
