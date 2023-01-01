import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {isEqual} from 'lodash';
import {colors, fontStyle} from '../../../../../utils';

export default function TabDay(props) {
  const {idx, data} = props;
  const date = data?.date;
  const {tabIndex} = useSelector((x) => x.forecastReducer);
  const isActive = isEqual(idx, tabIndex);

  return (
    <TouchableOpacity
      style={styles.container(isActive)}
      onPress={props?.onPress}>
      <Text style={styles.textTertiary}>{date?.day}</Text>
      <Text style={styles.text}>{date?.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (active) => ({
    alignItems: 'center',
    marginRight: 5,
    backgroundColor: active ? colors?.backdrop.black2 : 'transparent',
    padding: 4,
    borderRadius: 5,
  }),
  text: {...fontStyle.normal()},
  textTertiary: {...fontStyle.tertiary(12)},
});
