import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyle} from '../../../../utils';

export default function ItemData(props) {
  const {title, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.grey3,
    borderBottomWidth: 1,
  },
  text: {...fontStyle.normal()},
  textTertiary: {...fontStyle.tertiary()},
});
