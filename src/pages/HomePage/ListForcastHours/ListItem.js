import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontStyle} from '../../../utils';

export default function ListItem(props) {
  const {weather, tempLabel, time} = props?.data;
  const weatherIcon = weather?.icon;

  return (
    <View style={styles.container}>
      <Text style={styles.textTertiary}>{time}</Text>
      <Image source={weatherIcon} style={styles.icon} />
      <Text style={styles.text}>{tempLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 5, alignItems: 'center'},
  icon: {width: 50, height: 40},
  textTertiary: {...fontStyle.tertiary(12)},
  text: {...fontStyle.normal()},
});
