import { Depth } from './depth';

export declare type BaseColor = {
  contrast: string;
};

export declare type TransparentColor = {
  transparent: string;
};

export declare type DefaultColors = BaseColor & {
  light: string;
  main: string;
  dark: string;
};

export declare type BrandColors = {
  primary: DefaultColors;
  secondary: DefaultColors;
  tertiary: DefaultColors;
  accent: DefaultColors;
};

export declare type Colors = {
  danger: DefaultColors;
  warning: DefaultColors;
  info: DefaultColors;
  success: DefaultColors;
  text: DefaultColors;
  brand: BrandColors;
  background: Depth & TransparentColor;
};
