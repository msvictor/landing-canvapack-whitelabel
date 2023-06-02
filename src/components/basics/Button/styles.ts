import { getTheme } from '~/core/theme';
import { styled } from '~/modules';

type Props = {
  variant?: ButtonVariant;
};

const sizingSm = getTheme('sizing.sm');
const sizingMd = getTheme('sizing.md');
const background500 = getTheme('color.background.500');
const primary500 = getTheme('color.primary.500');
const tertiary500 = getTheme('color.tertiary.500');
const borderWidthXxs = getTheme('borderWidth.xxs');
const borderRadiusXs = getTheme('borderRadius.xs');
const fontWeightsMedium = getTheme('fontWeight.medium');
const fontSizesXl = getTheme('fontSize.xl');
const opacityDisabled = getTheme('opacity.disabled');
const opacityOpaque = getTheme('opacity.opaque');

const background = {
  primary: primary500,
  secondary: tertiary500,
  flat: 'transparent',
};

const text = {
  primary: background500,
  secondary: primary500,
  flat: primary500,
};

const border = {
  primary: primary500,
  secondary: tertiary500,
  flat: primary500,
};

export const Wrapper = styled.button<Props>`
  padding: ${sizingSm}px ${sizingMd}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => background[props.variant!]};
  border: ${borderWidthXxs}px solid ${(props) => border[props.variant!]};
  border-radius: ${borderRadiusXs}px;
  opacity: ${(props) => (props.disabled ? opacityDisabled : opacityOpaque)};

  transition: all 0.5s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const Text = styled.span<Props>`
  color: ${(props) => text[props.variant!]};
  font-weight: ${fontWeightsMedium};
  font-size: ${fontSizesXl}px;
  font-weight: 700;
`;
