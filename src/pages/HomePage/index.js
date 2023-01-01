import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../utils';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import CardDetailWeather from './CardDetailWeather';
import ListForcastHours from './ListForcastHours';

export default function HomePage() {
  return (
    <View style={globalStyle.page}>
      <Header />
      <CurrentWeather />
      <CardDetailWeather />
      <ListForcastHours />
      <Text>HomePage</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
