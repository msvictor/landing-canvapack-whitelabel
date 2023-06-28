import { StaticImageData } from 'next/image';
import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';
import { mqDevices } from '~/utils';
import ButtonBase from '../../basics/Button';

type Props = {
  image?: StaticImageData;
};

const text100 = getTheme('color.text.100');
const primary500 = getTheme('color.primary.500');
const tertiary500 = getTheme('color.tertiary.500');
const shadeBlackFade = getTheme('color.shade.blackFade');
const textDecorationUnderline = getTheme('textDecoration.underline');
const borderRadiusMd = getTheme('borderRadius.md');

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const ImageWrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-image: ${(props) => `url(${props.image?.src})`};
  background-position: center;
  background-repeat: no-repeat;

  @media ${mqDevices.inDesktop} {
    background-size: 180vw;
  }
`;

export const ImageFade = styled.div`
  background-color: ${shadeBlackFade};
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media ${mqDevices.inDesktop} {
    width: 65vw;
    background-color: none;
    opacity: 100%;
    padding: 0 ${pxToRem(160)} 0 ${pxToRem(80)};
  }

  @media ${mqDevices.inMobileAndTablet} {
    width: 100vw;
    background-color: ${tertiary500};
    opacity: 90%;
    padding: 0 ${pxToRem(80)} 0 ${pxToRem(80)};
  }
`;

export const ContentBackground = styled.div`
  border-bottom: 100vh solid ${tertiary500};
  border-right: 20vh solid transparent;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const TextWrapper = styled.div`
  z-index: 2;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: ${pxToRem(50)};
  font-weight: 900;
  color: ${primary500};
  margin-bottom: ${pxToRem(8)};

  > span {
    text-decoration: ${textDecorationUnderline};
  }

  @media ${mqDevices.inDesktop} {
    text-align: left;
  }

  @media ${mqDevices.inMobileAndTablet} {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: ${pxToRem(36)};
  color: ${primary500};
  font-weight: 500;

  > span {
    color: ${text100};
    background-color: ${primary500};
    border-radius: ${borderRadiusMd}px;
  }

  @media ${mqDevices.inDesktop} {
    text-align: left;
  }
  @media ${mqDevices.inMobileAndTablet} {
    text-align: center;
  }
`;

export const ActionsWrapper = styled.div`
  z-index: 2;
  gap: ${pxToRem(24)};
  margin-top: ${pxToRem(90)};

  @media ${mqDevices.inDesktop} {
    flex-direction: row;
  }
  @media ${mqDevices.inMobileAndTablet} {
    flex-direction: column;
  }
`;

export const Button = styled(ButtonBase)`
  flex: 1;
`;
