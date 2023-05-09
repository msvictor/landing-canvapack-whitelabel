import { FC } from 'react';
import { Fox } from '~/utils';
import { Banner, Wrapper } from './styles';

const Home: FC = () => (
  <Wrapper>
    <Banner image={Fox} />
  </Wrapper>
);

export default Home;
