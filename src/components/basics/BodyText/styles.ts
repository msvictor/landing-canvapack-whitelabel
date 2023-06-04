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
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    & + div {
      margin-top: ${pxToRem(32)};
    }

    > svg {
      color: ${hasContrast(text100, primary500)};
      margin-right: ${({ alignment }) =>
        alignment === 'left' ? pxToRem(16) : 0};
      margin-left: ${({ alignment }) =>
        alignment === 'right' ? pxToRem(16) : 0};
      font-size: ${pxToRem(60)};
    }

    > p {
      font-size: ${pxToRem(24)};
      color: ${hasContrast(primary500, text100)};
      text-align: ${({ alignment }) => alignment};

      > span {
        color: ${hasContrast(text100, primary500)};
      }
    }
  }
`;
