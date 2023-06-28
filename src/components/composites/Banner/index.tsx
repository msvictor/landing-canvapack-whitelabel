import { FC } from 'react';
import type { StaticImageData } from 'next/image';
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
  return (
    <Wrapper>
      <ImageWrapper image={image}>
        <ImageFade />
      </ImageWrapper>
      <ContentWrapper>
        <ContentBackground />

        <TextWrapper>
          <Title>
            Crie um <span>feed profissional</span>
          </Title>

          <Subtitle>
            transforme seu feed com essas artes <span>editáveis</span> e{' '}
            <span>profissionais</span> <span>em menos de 5 minutos</span>
          </Subtitle>
        </TextWrapper>

        <ActionsWrapper>
          <Button variant="flat" label="ENTRE EM CONTATO" />
          <Button label="EU QUERO O PACK" />
        </ActionsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Banner;
