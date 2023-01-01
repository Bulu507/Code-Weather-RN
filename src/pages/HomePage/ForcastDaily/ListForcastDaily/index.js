import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './ListItem';
import {setDetailForcast} from '../../../../config';

export default function ListForcastDaily(props) {
  const dispatch = useDispatch();
  const {listDaily} = useSelector((x) => x.forecastReducer);

  const onTapList = (item) => {
    dispatch(setDetailForcast(item));
  };

  console.log('listDaily', listDaily);
  return (
    <View style={styles.container}>
      {listDaily && (
        <>
          {listDaily?.map((item, idx) => {
            return (
              <ListItem key={idx} data={item} onPress={() => onTapList(item)} />
            );
          })}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
