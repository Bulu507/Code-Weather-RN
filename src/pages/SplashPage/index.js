import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {Gap} from '../../component';
import {fontStyle, globalStyle} from '../../utils';
import {ICLogo} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllData} from '../../config';

export default function SplashPage({navigation}) {
  const dispatch = useDispatch();
  const {loading} = useSelector((x) => x.globalReducer);
  const coords = {lat: Config.DEFAULT_LAT, lon: Config.DEFAULT_LON};

  useEffect(() => {
    dispatch(fetchAllData(coords, navigation));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const redux = useSelector((x) => x.globalReducer);
  console.log('redux', redux);
  return (
    <View style={styles.page}>
      <Gap />
      <View style={styles.centerBox}>
        <Image source={ICLogo} style={styles.logo} />
        {loading && <Text style={styles.title}>Fetching the weather...</Text>}
      </View>
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
  centerBox: {alignItems: 'center'},
  logo: {width: 100, height: 75},
  title: {...fontStyle.normal()},
});
