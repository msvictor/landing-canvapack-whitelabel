import { FC } from 'react';
import { MainBanner, PARSE_INDICATOR, PARSE_SEPARATOR } from '~/utils';
import {
  Banner,
  BodyText,
  Section,
  SectionTitle,
  VideoSectionWrapper,
  Wrapper,
} from './styles';

type Props = {
  desktop?: boolean;
};

const Home: FC<Props> = ({ desktop }) => (
  <Wrapper>
    <Banner image={MainBanner} />

    <Section contrast>
      <VideoSectionWrapper desktop={desktop}>
        <div>
          <SectionTitle
            alignment={desktop ? 'left' : 'center'}
            title={`Você está cansado de ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}perder horas${PARSE_SEPARATOR.CONTRAST} na frente do celular ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}para criar suas postagens?${PARSE_SEPARATOR.CONTRAST}`}
          />

          <BodyText
            alignment={desktop ? 'left' : 'center'}
            texts={[
              `Então, eu tenho uma ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}boa notícia${PARSE_SEPARATOR.CONTRAST} para te dar, você não vai mais precisar ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}passar por essa situação.${PARSE_SEPARATOR.CONTRAST}`,
              `O ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}Pack de Estética${PARSE_SEPARATOR.CONTRAST} foi criado ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}para ajudar profissionais${PARSE_SEPARATOR.CONTRAST} como você, que querem ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}otimizar tempo${PARSE_SEPARATOR.CONTRAST} na criação das postagens e deixar o perfil atraente, para ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}conquistar mais clientes.${PARSE_SEPARATOR.CONTRAST}`,
            ]}
          />
        </div>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/STo8EKNkXzo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
        />
      </VideoSectionWrapper>
    </Section>
  </Wrapper>
);

export default Home;
