import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import ItemData from './ItemData';
import {useSelector} from 'react-redux';
import WeatherInfo from './WeatherInfo';

export default function TabForecastDaily(props) {
  const {listDaily, tabIndex} = useSelector((x) => x.forecastReducer);
  const data = listDaily[tabIndex];
  const {wind, main} = data;

  console.log('listDaily', listDaily);
  return (
    <View style={styles.container}>
      <Header />
      <WeatherInfo />
      <ItemData title="Wind" value={wind?.labelWindSpeed} />
      <ItemData title="Pressure" value={main?.labelPressure} />
      <ItemData title="Humidity" value={main?.humidityLabel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
