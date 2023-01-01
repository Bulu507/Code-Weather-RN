import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap, Icon} from '../../../component';
import {colors, fontStyle, warpingText} from '../../../utils';
import {useSelector} from 'react-redux';

export default function Header(props) {
  const {location} = useSelector((x) => x.globalReducer);
  const label = warpingText(`${location?.name}, ${location.state}`);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchBox}>
        <Icon name="search-outline" type="ionicon" color={colors.white} />
        <Gap width={10} />
        <View style={styles.labelBox}>
          <Text style={styles.labelLocation}>{label}</Text>
          <Gap width={5} />
          <Icon name="map-pin" type="feather" size={14} color={colors.white} />
        </View>
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
  labelBox: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  labelLocation: {...fontStyle.bold(16)},
});
