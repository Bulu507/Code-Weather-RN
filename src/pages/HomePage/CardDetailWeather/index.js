import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {colors, fontStyle, getWindDirection} from '../../../utils';

export default function CardDetailWeather(props) {
  const {wind, main, UV} = useSelector((x) => x.weatherReducer);
  const labelWindSpeed = wind?.labelWindSpeed;
  const humidityLabel = main?.humidityLabel;
  const visibilityLabel = main?.visibilityLabel;
  const labelPressure = main?.labelPressure;
  const dewPoint = main?.dp;

  console.log('main', main);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textBold}>Wind: {labelWindSpeed}</Text>
        <Text style={styles.textBold}>Humidity: {humidityLabel}</Text>
        <Text style={styles.textBold}>UV Index: {UV}</Text>
        <Text style={styles.textBold}>Pressure: {labelPressure}</Text>
        <Text style={styles.textBold}>Visibility: {visibilityLabel}</Text>
        <Text style={styles.textBold}>Dew point: {dewPoint}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey8,
    margin: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textBold: {...fontStyle.bold(), marginBottom: 10},
});
