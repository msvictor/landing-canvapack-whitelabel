import { ReactNode } from 'react';
import { ReactElasticCarouselProps } from 'react-elastic-carousel';
import {
  Banner as BannerBase,
  BodyText as BodyTextBase,
  Button as ButtonBase,
  Image as ImageBase,
  ImageCard as ImageCardBase,
  PageWrapper,
  ProductCard as ProductCardBase,
  Section as SectionBase,
  SectionTitle as SectionTitleBase,
} from '~/components';
import { ifStyle, pxToRem } from '~/core';
import { Carousel as CarouselBase, styled } from '~/modules';
import { mqDevices } from '~/utils';

type Props = {
  desktop?: boolean;
  mobile?: boolean;
};

const desktop = ifStyle('desktop');
const mobile = ifStyle('mobile');

export const Wrapper = styled(PageWrapper)``;
export const Banner = styled(BannerBase)``;
export const Section = styled(SectionBase)``;
export const SectionTitle = styled(SectionTitleBase)``;
export const BodyText = styled(BodyTextBase)``;
export const ImageCard = styled(ImageCardBase)``;
export const Button = styled(ButtonBase)``;
export const ProductCard = styled(ProductCardBase)``;

export const Carousel = styled(CarouselBase as new () => CarouselBase)<
  ReactElasticCarouselProps & { children: ReactNode }
>``;

export const Image = styled(ImageBase)<Props>`
  @media ${mqDevices.inDesktop} {
    display: ${mobile('none')};
  }
  @media ${mqDevices.inMobileAndTablet} {
    display: ${desktop('none')};
  }
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const VideoSectionWrapper = styled.div`
  display: grid;
  gap: ${pxToRem(32)};
  align-items: center;

  min-height: ${pxToRem(450)};

  @media ${mqDevices.inDesktop} {
    margin: ${pxToRem(90)} 0px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(32)};
  }

  > iframe {
    min-height: ${pxToRem(400)};
  }

  @media ${mqDevices.inDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${mqDevices.inMobileAndTablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BenefitsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxToRem(32)};

  @media ${mqDevices.inDesktop} {
    margin: 0px ${pxToRem(60)};
  }

  > section {
    margin-top: ${pxToRem(12)};
    margin-bottom: ${pxToRem(64)};
  }
`;

export const AboutSectionWrapper = styled.div`
  margin: ${pxToRem(90)} 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(32)};

  @media ${mqDevices.inDesktop} {
    flex-direction: row;
  }
  @media ${mqDevices.inMobileAndTablet} {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(32)};

    @media ${mqDevices.inDesktop} {
      margin-bottom: 0;
    }
    @media ${mqDevices.inMobileAndTablet} {
      margin-bottom: ${pxToRem(64)};
    }

    > section {
      width: 100%;
      max-width: 500px;
    }
  }
`;

export const WarrantySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(32)};

  @media ${mqDevices.inDesktop} {
    margin: 0px ${pxToRem(90)};
  }

  > img {
    width: auto;
    max-height: ${pxToRem(260)};
  }
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    width: ${pxToRem(350)};
  }
`;

export const ProductsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(32)};

  @media ${mqDevices.inDesktop} {
    margin: 0px ${pxToRem(90)};
  }

  > img {
    width: auto;
    max-height: ${pxToRem(260)};
  }
`;
