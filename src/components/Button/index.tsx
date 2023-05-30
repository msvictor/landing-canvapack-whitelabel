import React, { HtmlHTMLAttributes } from 'react';
import { Text, Wrapper } from './styles';

type Props = HtmlHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  label: string;
};

const Button: React.FC<Props> = ({ variant = 'primary', label, ...rest }) => (
  <Wrapper variant={variant} {...rest}>
    <Text variant={variant}>{label}</Text>
  </Wrapper>
);

export default Button;
