import { FC } from 'react';
import {
  ReactElasticCarouselProps,
  RenderArrowProps,
  RenderPaginationProps,
} from 'react-elastic-carousel';
import { FiChevronLeft, FiChevronRight } from '~/utils';
import { CarouselBase, Chevrons, Dot, DotsWrapper } from './styles';

export type Props = Omit<ReactElasticCarouselProps, 'isRTL' | 'breakPoints'> &
  CarouselProps;

const Carousel: FC<Props> = ({
  children,
  breakpoints,
  orientation = 'left',
}) => {
  const defaultBreakpoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  const getArrows = ({ type, onClick }: RenderArrowProps) => {
    if (type === 'NEXT')
      return (
        <Chevrons>
          <FiChevronRight onClick={onClick} />
        </Chevrons>
      );

    return (
      <Chevrons>
        <FiChevronLeft onClick={onClick} />
      </Chevrons>
    );
  };

  const getPagination = ({
    pages,
    activePage,
    onClick,
  }: RenderPaginationProps) => {
    return (
      <DotsWrapper>
        {pages.map((page) => (
          <Dot
            key={page}
            active={page === activePage}
            onClick={() => onClick(String(page))}
          />
        ))}
      </DotsWrapper>
    );
  };

  return (
    <CarouselBase
      orientation={orientation}
      breakpoints={breakpoints ?? defaultBreakpoints}
      renderArrow={getArrows}
      renderPagination={getPagination}
    >
      {children}
    </CarouselBase>
  );
};

export default Carousel;
