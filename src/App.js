import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router, store} from './config';
import {LogBox} from 'react-native';
import {Provider, useSelector} from 'react-redux';

const MainApp = () => {
  const redux = useSelector((x) => x.globalReducer);
  LogBox.ignoreAllLogs();

  console.log('cek redux', redux);

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
