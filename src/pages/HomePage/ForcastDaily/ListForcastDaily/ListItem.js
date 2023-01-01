import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontStyle} from '../../../../utils';
import {Icon} from '../../../../component';

export default function ListItem(props) {
  const {date, main, weather} = props?.data;
  const weatherIcon = weather?.icon;

  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <Text style={styles.text}>{date?.fullDate}</Text>
      <View style={styles.right}>
        <Text style={styles.text}>{main?.tempAvgLabel}</Text>
        <Image source={weatherIcon} style={styles.icon} />
        <Icon name="chevron-right" type="octicons" color={colors.grey3} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: colors.grey3,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {...fontStyle.normal()},
  right: {flexDirection: 'row', alignItems: 'center'},
  icon: {width: 30, height: 30},
});
