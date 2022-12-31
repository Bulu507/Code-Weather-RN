import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {Gap} from '../../component';
import {fontStyle, globalStyle} from '../../utils';
import {ICLogo} from '../../assets';
import {useDispatch} from 'react-redux';
import {GetAllData} from '../../config';

export default function SplashPage({navigation}) {
  console.log('Config', Config);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Gap />
      <Image source={ICLogo} style={styles.logo} />
      <Text style={styles.title}>OpenWeather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    ...globalStyle.page,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {width: 100, height: 100},
  title: {...fontStyle.normal()},
});
