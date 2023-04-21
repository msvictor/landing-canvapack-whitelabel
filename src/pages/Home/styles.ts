import { Image, PageWrapper } from '~/components';
import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';

const spacingLg = getTheme('spacing.xxl');

export const Wrapper = styled(PageWrapper)``;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled(Image)`
  width: ${pxToRem(150)};
  height: ${pxToRem(200)};
`;

export const ImageBy = styled(Image)`
  width: ${pxToRem(180)};
  height: ${pxToRem(40)};
`;

export const Heading = styled.div`
  width: 100%;
  justify-content: flex-end;
  padding-top: ${spacingLg}px;
  padding-right: ${spacingLg}px;
`;
