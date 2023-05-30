import { StaticImageData } from 'next/image';
import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';
import ButtonBase from '../Button';

type Props = {
  image?: StaticImageData;
  underline?: boolean;
  contrast?: boolean;
  desktop?: boolean;
};

const text100 = getTheme('color.text.100');
const primary500 = getTheme('color.primary.500');
const tertiary500 = getTheme('color.tertiary.500');
const shadeBlackFade = getTheme('color.shade.blackFade');
const textDecorationUnderline = getTheme('textDecoration.underline');
const textDecorationNone = getTheme('textDecoration.none');
const borderRadiusMd = getTheme('borderRadius.md');

const hasUnderline = ifStyle('underline');
const hasContrast = ifStyle('contrast');
const isDesktop = ifStyle('desktop');

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
  background-size: ${isDesktop(180)}vw;
`;

export const ImageFade = styled.div`
  background-color: ${shadeBlackFade};
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section<Props>`
  position: relative;
  width: ${isDesktop(65, 100)}vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${pxToRem(160)} 0 ${pxToRem(80)};
  z-index: 1;
  background-color: ${isDesktop('none', tertiary500)};
  opacity: ${isDesktop('100%', '90%')};
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

export const Title = styled.span<Props>`
  text-decoration: ${hasUnderline(textDecorationUnderline, textDecorationNone)};
  font-size: ${pxToRem(50)};
  color: ${primary500};
  font-weight: 900;
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(8)};
`;

export const Subtitle = styled.span<Props>`
  font-size: ${pxToRem(36)};
  color: ${hasContrast(text100, primary500)};
  background-color: ${hasContrast(primary500, 'none')};
  font-weight: 500;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: ${borderRadiusMd}px;
  gap: ${pxToRem(8)};
`;

export const ActionsWrapper = styled.div`
  z-index: 2;
  flex-direction: row;
  gap: ${pxToRem(24)};
  margin-top: ${pxToRem(90)};
`;

export const Button = styled(ButtonBase)`
  flex: 1;
`;

export const SocialWrapper = styled.div`
  z-index: 2;
  flex-direction: row;
`;
