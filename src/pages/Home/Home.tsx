import { FC } from 'react';
import { ByCerradobit, Fox } from '~/utils';
import { Content, Heading, ImageBy, ImageLogo, Wrapper } from './styles';

const Home: FC = () => (
  <Wrapper>
    <Heading>
      <ImageBy src={ByCerradobit} alt="Desenvolvido por CerradoBit" />
    </Heading>
    <Content>
      <ImageLogo src={Fox} alt="Lobo Guará" />
    </Content>
  </Wrapper>
);

export default Home;
