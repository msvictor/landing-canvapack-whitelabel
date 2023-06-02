import { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
  contrast?: boolean;
  children: ReactNode;
};

const Section: FC<Props> = ({ contrast, children }) => (
  <Wrapper contrast={contrast}>
    <section>{children}</section>
  </Wrapper>
);

export default Section;
