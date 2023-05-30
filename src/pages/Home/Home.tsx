import { FC } from 'react';
import { MainBanner } from '~/utils';
import { Banner, Wrapper } from './styles';

const Home: FC = () => (
  <Wrapper>
    <Banner image={MainBanner} />
  </Wrapper>
);

export default Home;
