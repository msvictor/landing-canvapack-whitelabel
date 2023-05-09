import { FC } from 'react';
import type { StaticImageData } from 'next/image';
import { Image, Wrapper } from './styles';

type Props = {
  image: StaticImageData | string;
};

const Banner: FC<Props> = ({ image }) => {
  return (
    <Wrapper>
      <Image src={image} alt="logo" />
    </Wrapper>
  );
};

export default Banner;
