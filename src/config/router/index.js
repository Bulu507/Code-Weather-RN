import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomePage, SplashPage} from '../../pages';
import {HOME_PAGE, SPLASH_PAGE} from '../../parameter';

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
    </Stack.Navigator>
  );
}
