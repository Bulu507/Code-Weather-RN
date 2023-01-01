import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Header() {
  const {listDaily} = useSelector((x) => x.forecastReducer);
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
  },
});
