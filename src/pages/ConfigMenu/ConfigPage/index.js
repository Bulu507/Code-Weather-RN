import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../../utils';
import {Header} from '../../../component';
import ListMenu from './ListMenu';

export default function ConfigPage({navigation}) {
  return (
    <View style={globalStyle.page}>
      <Header title="Settings" onPress={() => navigation?.goBack()} />
      <ListMenu title="Different weather?" />
      <ListMenu title="Customize Units" />
      <Text>ConfigPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
