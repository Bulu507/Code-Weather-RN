import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ConfigPage, HomePage, SplashPage} from '../../pages';
import {CONFIG_PAGE, HOME_PAGE, SPLASH_PAGE} from '../../parameter';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={SPLASH_PAGE}>
      <Stack.Screen
        name={SPLASH_PAGE}
        component={SplashPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HOME_PAGE}
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CONFIG_PAGE}
        component={ConfigPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
