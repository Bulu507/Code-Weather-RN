import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import {setDefaultData} from '../data';
import {fonts} from '../fonts';

export const globalStyle = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.black},
});

export const fontStyle = StyleSheet.create({
  bold: (size, color) => ({
    fontFamily: fonts.primary.bold,
    fontSize: setDefaultData(size, 14),
    color: setDefaultData(colors.text.default, color),
    flexShrink: 1,
  }),
  normal: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 14),
    color: setDefaultData(colors.text.default, color),
    flexShrink: 1,
  }),
  danger: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 14),
    color: setDefaultData(colors.text.danger, color),
    flexShrink: 1,
  }),
  tertiary: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 14),
    color: setDefaultData(colors.text.tertiary, color),
    flexShrink: 1,
  }),
});
