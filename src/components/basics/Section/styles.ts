import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';

type Props = {
  contrast?: boolean;
};

const hasContrast = ifStyle('contrast');

const secondary500 = getTheme('color.secondary.500');
const tertiary500 = getTheme('color.tertiary.500');

export const Wrapper = styled.div<Props>`
  width: 100%;
  padding: ${pxToRem(54)} ${pxToRem(81)};
  background-color: ${hasContrast(secondary500, tertiary500)};
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    width: 100%;
  }
`;
