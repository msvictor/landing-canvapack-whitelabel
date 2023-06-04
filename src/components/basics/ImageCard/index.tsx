import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { Image, Wrapper } from './styles';

type Props = {
  image: StaticImageData;
};

const ImageCard: FC<Props> = ({ image }) => (
  <Wrapper>
    <Image alt="image" src={image} />
  </Wrapper>
);

export default ImageCard;
