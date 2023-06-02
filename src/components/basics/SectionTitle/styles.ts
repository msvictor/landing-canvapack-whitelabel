import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';

type Props = {
  alignment?: 'left' | 'right' | 'center';
  contrast?: boolean;
};

const hasContrast = ifStyle('contrast');

const borderRadiusCircle = getTheme('borderRadius.circle');
const text100 = getTheme('color.text.100');
const primary500 = getTheme('color.primary.500');

const getAlignment = (alignment: 'left' | 'right' | 'center') => {
  const align = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };

  return align[alignment];
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignment }) => getAlignment(alignment ?? 'center')};

  > h1 {
    font-size: ${pxToRem(32)};
    color: ${hasContrast(primary500, text100)};
    text-align: ${({ alignment }) => alignment};
    > span {
      color: ${hasContrast(text100, primary500)};
    }
  }

  h2 {
    font-size: ${pxToRem(28)};
    color: ${hasContrast(primary500, text100)};
    text-align: ${({ alignment }) => alignment};
    > span {
      color: ${hasContrast(text100, primary500)};
    }
  }

  > div {
    width: 70px;
    height: 5px;
    border-radius: ${borderRadiusCircle}px;
    background-color: ${hasContrast(text100, primary500)};
    margin: ${pxToRem(16)} 0px;
  }
`;
