import { FC } from 'react';
import { observer } from '~/modules';
import { useStores } from '~/utils';
import Home from './Home';

export const HomeContainer: FC = () => {
  const { theme } = useStores();
  const { isDesktop } = theme;

  return <Home desktop={isDesktop} />;
};

export default observer(HomeContainer);
