import { FC } from 'react';
import { observer } from '~/modules';
import {
  CalendarCover,
  CalendarManual,
  CalendarPreview,
  Cleaning,
  Depilation,
  Product,
  ProductBonus,
  Stretching,
} from '~/utils';
import Home from './Home';

export const HomeContainer: FC = () => {
  const photos = [Cleaning, Stretching, Depilation];
  const calendar = [CalendarCover, CalendarManual, CalendarPreview];
  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const products = [
    {
      image: Product,
      title: 'Pack 41 templates',
      captions: ['Templates de Estética'],
      price: 'R$ 19,90',
    },
    {
      image: ProductBonus,
      title: 'Pack 41 templates  + Bônus',
      captions: ['Templates de Estética', 'Calendario de conteúdo de 2023'],
      price: 'R$ 29,80',
      priceSplitted: 'R$ 19,90 + R$ 9,90',
    },
  ];

  return (
    <Home
      photos={photos}
      calendar={calendar}
      breakPoints={breakPoints}
      products={products}
    />
  );
};

export default observer(HomeContainer);
