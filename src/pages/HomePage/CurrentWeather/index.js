import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors, fonts, fontStyle} from '../../../utils';

export default function CurrentWeather(props) {
  const {weather, main} = useSelector((x) => x.weatherReducer);
  const weatherIcon = weather?.icon;
  const weatherLabel = weather?.main;
  const weatherDescLabel = weather?.description;
  const tempLabel = main?.tempLabel;
  const feelsLikeLabel = main?.feelsLikeLabel;

  return (
    <View style={styles.container}>
      <View style={styles.weatherBox}>
        <Image source={weatherIcon} style={styles.icon} />
        <View>
          <Text style={styles.text}>{weatherLabel}</Text>
          <Text style={styles.textTertiary}>{weatherDescLabel}</Text>
        </View>
      </View>
      <Text style={styles.temp}>{tempLabel}</Text>
      <Text style={styles.textTertiary}>{`Feels like ${feelsLikeLabel}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  weatherBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {width: 50, height: 50},
  text: {...fontStyle.normal()},
  textTertiary: {...fontStyle.tertiary(12)},
  temp: {
    fontFamily: fonts.primary[100],
    fontSize: 80,
    color: colors.text.default,
    textAlign: 'center',
    includeFontPadding: false,
  },
});
