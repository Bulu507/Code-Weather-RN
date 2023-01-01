import React from 'react';
import {useSelector} from 'react-redux';
import {isEqual} from 'lodash';
import TabForecastDaily from './TabForcastDaily';
import ListForcastDaily from './ListForcastDaily';

export default function ForcastDaily(props) {
  const {showMode} = useSelector((x) => x.forecastReducer);

  if (isEqual(showMode, 'tab')) {
    return <TabForecastDaily />;
  }

  return <ListForcastDaily />;
}
