import { StaticImageData } from 'next/image';
import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';
import ButtonBase from '../Button';

const borderRadiusLg = getTheme('borderRadius.lg');
const primary500 = getTheme('color.primary.500');
const tertiary500 = getTheme('color.tertiary.500');
const text100 = getTheme('color.text.100');

type Props = {
  image?: StaticImageData;
};

export const Wrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(424)};
  min-height: ${pxToRem(500)};
  overflow: hidden;
  border-radius: ${borderRadiusLg}px;
  box-shadow: -4px 8px 12px rgb(0, 0, 0, 0.15);

  background-image: ${(props) => `url(${props.image?.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  position: relative;
`;

export const Button = styled(ButtonBase)``;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: ${pxToRem(190)};
  padding: ${pxToRem(16)};

  background-color: ${tertiary500};

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;

    > p {
      color: ${text100};
      font-size: ${pxToRem(20)};
      font-weight: 700;
    }

    > span {
      color: ${text100};
      font-size: ${pxToRem(11)};
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: ${pxToRem(2)};

      > svg {
        color: ${primary500};
        margin-right: ${pxToRem(4)};
      }
    }
  }

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > aside {
      > p {
        color: ${text100};
        line-height: ${pxToRem(32)};
        font-size: ${pxToRem(32)};
        font-weight: 700;
      }

      > span {
        color: ${text100};
        font-weight: 500;
        font-size: ${pxToRem(11)};
        line-height: ${pxToRem(11)};
      }
    }
  }
`;
