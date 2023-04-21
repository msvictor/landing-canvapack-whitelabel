import type { AppProps } from 'next/app';
import { GlobalStyle, ThemeProvider } from '~/core';
import store from '~/core/stores';
import { NextSeo, Provider } from '~/modules';
import { ToastContainer } from '~/utils';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo title="Template React | CerradoBit" />
      <Provider rootStore={store}>
        <ThemeProvider theme={store.theme}>
          <ToastContainer />
          <Component {...pageProps} />
          <GlobalStyle theme={store.theme} />
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default App;
