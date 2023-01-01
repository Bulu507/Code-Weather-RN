import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Icon} from '../../../../../component';
import {colors} from '../../../../../utils';
import TabDay from './TabDay';
import {setDetailTabForcast, setForecastReducer} from '../../../../../config';

export default function Header() {
  const dispatch = useDispatch();
  const {listDaily} = useSelector((x) => x.forecastReducer);

  const setToList = () => {
    dispatch(setForecastReducer('showMode', 'list'));
  };

  const onTabPress = (idx) => {
    dispatch(setDetailTabForcast(idx));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBox}>
        {listDaily && (
          <>
            {listDaily?.map((item, idx) => {
              return (
                <TabDay
                  key={idx}
                  idx={idx}
                  data={item}
                  onPress={() => onTabPress(idx)}
                />
              );
            })}
          </>
        )}
      </View>
      <Gap width={5} />
      <Icon
        name="list"
        type="ionicon"
        color={colors.white}
        onPress={() => setToList()}
      />
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
    alignItems: 'center',
  },
  tabBox: {
    flexDirection: 'row',
    flex: 1,
  },
});
