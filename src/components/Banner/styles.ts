import NextImage from 'next/image';
import { pxToRem } from '~/core';
import { styled } from '~/modules';

export const Wrapper = styled.div``;

export const Image = styled(NextImage)`
  width: auto;
  height: ${pxToRem(200)};
`;
