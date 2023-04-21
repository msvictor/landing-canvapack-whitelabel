import { getTheme } from '~/core';
import { styled } from '~/modules';

const backgroundD0 = getTheme('colors.background.d0');

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: ${backgroundD0};
`;
