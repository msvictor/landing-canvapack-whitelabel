import { DefaultTheme } from 'styled-components';
import { BorderRadius, BorderWidth } from './border';
import { BoxShadow } from './boxShadow';
import { Color } from './color';
import { LetterSpacing } from './letterSpacing';
import { LineHeight } from './lineHeight';
import { Opacity } from './opacity';
import { Sizing } from './sizing';
import { Spacing } from './spacing';
import {
  FontFamily,
  FontSize,
  FontWeight,
  TextCase,
  TextDecoration,
} from './text';

export declare type ThemeType = {
  sizing: Sizing<number>;
  spacing: Spacing;
  borderWidth: BorderWidth;
  borderRadius: BorderRadius;
  opacity: Opacity;
  fontWeight: FontWeight;
  fontFamily: FontFamily;
  fontSize: FontSize;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  color: Color;
  boxShadow: BoxShadow;
  textCase: TextCase;
  textDecoration: TextDecoration;
};

export declare type ThemeProps = {
  theme: DefaultTheme;
};
