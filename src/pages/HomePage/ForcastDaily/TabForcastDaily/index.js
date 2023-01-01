import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';

export default function TabForecastDaily(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Text>TabForecastDaily</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});
