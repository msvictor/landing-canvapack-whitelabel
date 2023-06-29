import { getTheme, ifStyle, pxToRem } from '~/core';
import { Carousel as ReactElasticCarousel, styled } from '~/modules';
import { Props } from '.';

type DotProps = {
  active?: boolean;
};

const active = ifStyle('active');

const background100 = getTheme('color.background.100');
const background300 = getTheme('color.background.300');
const shadeWhite = getTheme('color.shade.white');
const shadeWhiteFade = getTheme('color.shade.whiteFade');
const borderRadiusCircle = getTheme('borderRadius.circle');

export const CarouselBase = styled(
  ReactElasticCarousel as new () => ReactElasticCarousel,
).attrs(({ orientation, breakpoints }: Props) => ({
  isRTL: orientation === 'right',
  breakPoints: breakpoints,
  itemPadding: [16, 0, 16, 0],
}))<Props>``;

export const Chevrons = styled.div`
  margin: 0;
  padding: 0;
  margin: auto 0;

  > svg {
    font-size: ${pxToRem(24)};
    color: ${background100};
  }
`;

export const DotsWrapper = styled.div<DotProps>`
  display: flex;
  flex-direction: row;
`;

export const Dot = styled.div<DotProps>`
  border: 0.5px solid ${background100};
  border-radius: ${borderRadiusCircle}px;
  width: ${pxToRem(12)};
  height: ${pxToRem(12)};
  background-color: ${active(shadeWhite, shadeWhiteFade)};
  margin: 0 ${pxToRem(4)};
  transition: all 0.3s;

  &:hover {
    background-color: ${active(shadeWhite, background300)};
  }
`;
