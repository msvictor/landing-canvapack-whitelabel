import { FC } from 'react';
import { observer } from '~/modules';
import Home from './Home';

export const HomeContainer: FC = () => {
  return <Home />;
};

export default observer(HomeContainer);
