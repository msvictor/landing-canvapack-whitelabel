---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import { PageWrapper } from '~/components';
import { styled } from '~/modules'
import { getTheme } from '~/core';

const primaryColor = getTheme('color.primary.500');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Heading = styled.text`
  font-weight: normal;
  text-align: center;
  color: ${primaryColor};
`;
