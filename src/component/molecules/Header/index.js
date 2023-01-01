import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontStyle} from '../../../utils';
import {Gap, Icon} from '../../atoms';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        type="feather"
        color={colors.white}
        onPress={props?.onPress}
      />
      <Gap width={20} />
      <Text style={styles.title}>{props?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {...fontStyle.bold(18)},
});
