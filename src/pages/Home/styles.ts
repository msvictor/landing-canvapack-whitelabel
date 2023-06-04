import {
  Banner as BannerBase,
  BodyText as BodyTextBase,
  Button as ButtonBase,
  Image as ImageBase,
  ImageCard as ImageCardBase,
  PageWrapper,
  Section as SectionBase,
  SectionTitle as SectionTitleBase,
} from '~/components';
import { ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';

type Props = {
  desktop?: boolean;
};

const isDesktop = ifStyle('desktop');

export const Wrapper = styled(PageWrapper)``;
export const Banner = styled(BannerBase)``;
export const Section = styled(SectionBase)``;
export const SectionTitle = styled(SectionTitleBase)``;
export const BodyText = styled(BodyTextBase)``;
export const ImageCard = styled(ImageCardBase)``;
export const Image = styled(ImageBase)``;
export const Button = styled(ButtonBase)``;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const VideoSectionWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${isDesktop(2, 1)}, 1fr);
  gap: ${pxToRem(32)};
  align-items: center;

  min-height: ${pxToRem(450)};
  margin: ${pxToRem(90)} 0px;

  > div {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(32)};
  }

  > iframe {
    min-height: ${pxToRem(400)};
  }
`;

export const BenefitsSectionWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 0px ${pxToRem(60)};

  > section {
    margin-top: ${pxToRem(16)};

    display: flex;
    flex-direction: ${isDesktop('row', 'column')};
    justify-content: space-between;
    align-items: center;
    gap: ${pxToRem(32)};
    margin-bottom: ${pxToRem(64)};
  }
`;

export const AboutSectionWrapper = styled.div<Props>`
  margin: ${pxToRem(90)} 0px;

  display: flex;
  flex-direction: ${isDesktop('row', 'column')};
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(32)};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(32)};
    margin-bottom: ${isDesktop(0, pxToRem(64))};

    > section {
      width: 100%;
      max-width: 500px;
    }
  }
`;

export const WarrantySectionWrapper = styled.div<Props>`
  margin: 0px ${pxToRem(90)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(32)};

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
