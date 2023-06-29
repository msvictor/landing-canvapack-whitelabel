declare type CarouselBreakpoints = {
  width: number;
  itemsToShow?: number;
  itemsToScroll?: number;
};

declare type CarouselProps = {
  children?: ReactNode;
  breakpoints?: CarouselBreakpoints[];
  orientation?: 'right' | 'left';
  isRTL?: boolean;
};
