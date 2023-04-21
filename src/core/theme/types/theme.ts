import { DefaultTheme } from 'styled-components';
import { Border } from './border';
import { Colors } from './colors';
import { Fonts } from './fonts';
import { FontSizing } from './fontSizing';
import { LetterSpacing } from './letterSpacing';
import { LineHeight } from './lineHeight';
import { Opacity } from './opacity';
import { Radius } from './radius';
import { Shadow } from './shadow';
import { Sizing } from './sizing';
import { Spacing } from './spacing';
import { Weight } from './weight';

export declare type ThemeType = {
  sizing: Sizing;
  spacing: Spacing;
  border: Border;
  radius: Radius;
  opacity: Opacity;
  weight: Weight;
  shadow: Shadow;
  fonts: Fonts;
  fontSizing: FontSizing;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  colors: Colors;
};

export declare type ThemeProps = {
  theme: DefaultTheme;
};
