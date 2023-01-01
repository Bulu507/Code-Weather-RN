import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ListItem from './ListItem';

export default function ListForcastHours(props) {
  const {listHours} = useSelector((x) => x.forecastReducer);

  return (
    <View style={styles.container}>
      {listHours && (
        <ScrollView
          horizontal
          indicatorStyle="white"
          contentContainerStyle={styles.scrollView}>
          {listHours?.map((item, idx) => {
            return <ListItem key={idx} data={item} idx={idx} />;
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  scrollView: {flexGrow: 1},
});
