import { Sizing } from './sizing';

export declare type FontFamily = {
  icon: Record<string, string>;
  text: Record<string, string>;
};

export declare type FontWeight = {
  thin: string;
  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  black: string;
};

export declare type FontSize = Sizing<number>;

export declare type TextCase = {
  none: string;
  uppercase: string;
  lowercase: string;
  capitalize: string;
};

export declare type TextDecoration = {
  none: string;
  underline: string;
  lineThrough: string;
};
