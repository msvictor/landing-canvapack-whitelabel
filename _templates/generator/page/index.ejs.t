---
to: src/pages/<%= h.changeCase.pascal(name) %>/index.page.tsx
---
import { FC } from 'react';
import { observer } from '~/modules';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>';

type Props = {};

export const <%= h.changeCase.pascal(name) %>Container: FC<Props> = ({}) => {
  return <<%= h.changeCase.pascal(name) %> />;
};

export default observer(<%= h.changeCase.pascal(name) %>Container);

