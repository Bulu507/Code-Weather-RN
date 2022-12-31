import {backdrop} from './backdrop';
import {card} from './card';
import {mainColors} from './color';
import {text} from './text';

export const colors = {
  ...mainColors,
  primary: mainColors?.blue1,
  submit: mainColors.green1,
  tertiary: mainColors.grey1,
  text: text,
  backdrop: backdrop,
  card: card,
};
