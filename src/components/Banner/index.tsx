import { FC } from 'react';
import type { StaticImageData } from 'next/image';
import { useStores } from '~/utils';
import {
  ActionsWrapper,
  Button,
  ContentBackground,
  ContentWrapper,
  ImageFade,
  ImageWrapper,
  Subtitle,
  TextWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  image: StaticImageData;
};

const Banner: FC<Props> = ({ image }) => {
  const { theme } = useStores();
  const { isDesktop } = theme;

  return (
    <Wrapper>
      <ImageWrapper image={image} desktop={isDesktop}>
        <ImageFade />
      </ImageWrapper>
      <ContentWrapper desktop={isDesktop}>
        {isDesktop && <ContentBackground />}

        <TextWrapper>
          <Title desktop={isDesktop}>
            Crie um <Title underline>feed profissional</Title>
          </Title>
          <Subtitle desktop={isDesktop}>
            transforme seu feed com essas artes
            <Subtitle contrast>editáveis</Subtitle> e
            <Subtitle contrast>profissionais</Subtitle>
            <Subtitle contrast>em menos de 5 minutos</Subtitle>
          </Subtitle>
        </TextWrapper>

        <ActionsWrapper desktop={isDesktop}>
          <Button variant="flat" label="ENTRE EM CONTATO" />
          <Button label="EU QUERO O PACK" />
        </ActionsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Banner;
