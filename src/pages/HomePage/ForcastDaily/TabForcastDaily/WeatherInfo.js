import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontStyle} from '../../../../utils';
import {useSelector} from 'react-redux';

export default function WeatherInfo() {
  const {listDaily, tabIndex} = useSelector((x) => x.forecastReducer);
  const data = listDaily[tabIndex];
  const {main, weather} = data;
  const tempAvgLabel = main?.tempAvgLabel;
  const weatherLabel = weather?.main;
  const weatherDescLabel = weather?.description;
  const weatherIcon = weather?.icon;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{weatherLabel}</Text>
        <Text style={styles.textTertiary}>{weatherDescLabel}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{tempAvgLabel}</Text>
        <Image source={weatherIcon} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {...fontStyle.normal()},
  textTertiary: {...fontStyle.tertiary(12)},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {width: 50, height: 50},
});
