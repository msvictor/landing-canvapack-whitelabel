import { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = { children: ReactNode; className?: string };

const PageWrapper: FC<Props> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default PageWrapper;
