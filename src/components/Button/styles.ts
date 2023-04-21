import styled from 'styled-components';
import { getTheme } from '~/core/theme';
import { Animation } from '~/modules';
import { LoadDotsAnimation } from '~/utils/assets';

type ButtonProps = {
  transparent?: boolean;
  disabled?: boolean;
  loading?: boolean;
  column?: boolean;
};

const colorBrandPrimaryMain = getTheme('colors.brand.primary.main');

const brandPrimaryContrast = getTheme('colors.brand.primary.contrast');
const radiusMd = getTheme('radius.md');

export const Button = styled.button<ButtonProps>`
  display: flex;
  opacity: ${(props) => (props.disabled ? 0.3 : props.loading ? 0.8 : 1)};
  pointer-events: ${(props) => (props.disabled || props.loading) && 'none'};
  height: 40px;
  width: 250px;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-weight: bold;
  font-size: small;

  background-color: ${(props) =>
    props.transparent ? 'transparent' : colorBrandPrimaryMain};
  color: ${brandPrimaryContrast};
  border-radius: ${radiusMd}px;
  border: ${(props) => (props.transparent ? 0.5 : 0)}px solid
    ${brandPrimaryContrast};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.3 : 0.8)};
    cursor: ${(props) =>
      props.disabled
        ? 'not-allowed'
        : props.loading
        ? 'not-allowed'
        : 'pointer'};
  }
`;

export const LoadingIndicator = styled(Animation).attrs({
  options: {
    animationData: LoadDotsAnimation,
  },
  width: '35px',
  speed: 1.5,
})``;
