import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontStyle} from '../../../utils';
import {Icon} from '../../../component';

export default function ListMenu(props) {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <Text style={styles.text}>{title}</Text>
      <Icon name="chevron-right" type="octicons" color={colors.white} />
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
});
