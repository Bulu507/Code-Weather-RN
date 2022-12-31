import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import {Icon} from '../../component';

export default function SplashPage() {
  console.log('Config', Config);
  return (
    <View style={styles.page}>
      <Text>SplashPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 20},
});
