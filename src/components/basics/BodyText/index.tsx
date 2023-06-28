import { ComponentType, FC } from 'react';
import { PARSE_INDICATOR, PARSE_SEPARATOR } from '~/utils';
import { Wrapper } from './styles';

type Props = {
  texts: string[];
  contrast?: boolean;
  alignment?: 'left' | 'right' | 'center';
  icon?: ComponentType;
};

const BodyText: FC<Props> = ({
  texts,
  contrast,
  icon: IconComponent,
  alignment = 'center',
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
      {texts.map((text) => (
        <div key={text.trim()}>
          {alignment === 'left' && IconComponent && <IconComponent />}
          <p>{textParsed(text)}</p>
          {alignment === 'right' && IconComponent && <IconComponent />}
        </div>
      ))}
    </Wrapper>
  );
};

export default BodyText;
