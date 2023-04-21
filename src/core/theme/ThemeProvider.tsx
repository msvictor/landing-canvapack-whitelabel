import { FC, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { inject, observer } from '~/modules';
import { ThemeStore } from '../stores';

type Props = {
  theme: ThemeStore;
  children: ReactNode;
};

const ThemeProviderContainer: FC<Props> = ({ children, theme }) => {
  const updateDimensions = () => {
    theme.setDevice(window.innerWidth);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return <ThemeProvider theme={theme.theme}>{children}</ThemeProvider>;
};

export default inject('theme')(observer(ThemeProviderContainer));
