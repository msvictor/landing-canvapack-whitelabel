import {
  Banner as BannerBase,
  BodyText as BodyTextBase,
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
