import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { FiDownload } from '~/utils';
import { Button, Content, Wrapper } from './styles';

type Props = {
  image: StaticImageData;
  title: string;
  captions: string[];
  price: string;
  priceSplitted?: string;
};

const ProductCard: FC<Props> = ({
  image,
  title,
  captions,
  price,
  priceSplitted,
}) => (
  <Wrapper image={image}>
    <Content>
      <div>
        <p>{title}</p>

        {captions.map((caption) => (
          <span key={caption.trim()}>
            <FiDownload />
            {caption}
          </span>
        ))}
      </div>

      <section>
        <aside>
          <p>{price}</p>
          {priceSplitted && <span>{priceSplitted}</span>}
        </aside>

        <Button label="QUERO ESTE" />
      </section>
    </Content>
  </Wrapper>
);

export default ProductCard;
