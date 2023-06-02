import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';

type Props = {
  alignment?: 'left' | 'right' | 'center';
  contrast?: boolean;
};

const hasContrast = ifStyle('contrast');

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

  > p {
    font-size: ${pxToRem(24)};
    color: ${hasContrast(primary500, text100)};
    text-align: ${({ alignment }) => alignment};

    & + p {
      margin-top: ${pxToRem(24)};
    }

    > span {
      color: ${hasContrast(text100, primary500)};
    }
  }
`;
