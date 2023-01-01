import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../utils';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import CardDetailWeather from './CardDetailWeather';
import ListForcastHours from './ListForcastHours';
import ForcastDaily from './ForcastDaily';

export default function HomePage({navigation}) {
  return (
    <View style={globalStyle.page}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CurrentWeather />
        <CardDetailWeather />
        <ListForcastHours />
        <ForcastDaily />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
});
