import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';
import { mqDevices } from '~/utils';

type Props = {
  contrast?: boolean;
};

const hasContrast = ifStyle('contrast');

const secondary500 = getTheme('color.secondary.500');
const tertiary500 = getTheme('color.tertiary.500');

export const Wrapper = styled.div<Props>`
  width: 100%;

  background-color: ${hasContrast(secondary500, tertiary500)};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mqDevices.inDesktop} {
    padding: ${pxToRem(56)} ${pxToRem(82)};
  }

  @media ${mqDevices.inMobileAndTablet} {
    padding: ${pxToRem(26)} ${pxToRem(41)};
  }

  > section {
    width: 100%;
  }
`;
