import { getTheme } from '~/core';
import { styled } from '~/modules';

const background500 = getTheme('colors.background.500');

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: ${background500};
`;
