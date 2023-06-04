import NextImage from 'next/image';
import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';

const borderRadiusLg = getTheme('borderRadius.lg');

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(450)};
  max-height: ${pxToRem(450)};
  overflow: hidden;
  border-radius: ${borderRadiusLg}px;
  box-shadow: -4px 8px 12px rgb(0, 0, 0, 0.15);
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
`;
