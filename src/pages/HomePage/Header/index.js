import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap, Icon} from '../../../component';
import {colors, fontStyle} from '../../../utils';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBox}>
        <Icon name="search-outline" type="ionicon" color={colors.white} />
        <Gap width={10} />
        <Text style={styles.labelLocation}>Label Location</Text>
      </TouchableOpacity>
      <Gap width={10} />
      <Icon name="options-outline" type="ionicon" color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelLocation: {...fontStyle.bold(16), flex: 1},
});
