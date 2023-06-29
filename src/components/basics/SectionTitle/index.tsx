import { FC } from 'react';
import { PARSE_INDICATOR, PARSE_SEPARATOR } from '~/utils';
import { Wrapper } from './styles';

type Props = {
  title?: string;
  subtitle?: string;
  contrast?: boolean;
  alignment?: 'left' | 'right' | 'center';
  separator?: boolean;
  divider?: boolean;
};

const SectionTitle: FC<Props> = ({
  title,
  subtitle,
  contrast,
  alignment = 'center',
  separator = true,
  divider = false,
}) => {
  const textParsed = (text: string) => {
    const textSplitted = text.split(PARSE_SEPARATOR.CONTRAST);

    return (
      <>
        {textSplitted.map((word) => {
          if (word.includes(PARSE_INDICATOR.CONTRAST)) {
            return (
              <span key={word.trim()}>
                {word.split(PARSE_INDICATOR.CONTRAST)[1]}
              </span>
            );
          }
          return word;
        })}
      </>
    );
  };

  return (
    <Wrapper alignment={alignment} contrast={contrast}>
      {title && <h1>{textParsed(title)}</h1>}
      {separator && <div />}
      {subtitle && <h2>{textParsed(subtitle)}</h2>}
      {divider && <div />}
    </Wrapper>
  );
};

export default SectionTitle;
