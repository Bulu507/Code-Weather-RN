import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SplashPage} from '../../pages';
import {SPLASH_PAGE} from '../../parameter';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={SPLASH_PAGE}>
      <Stack.Screen
        name={SPLASH_PAGE}
        component={SplashPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
