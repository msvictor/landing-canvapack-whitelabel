import React from 'react';
import stores from '~/core/stores';
import { MobXProviderContext } from '~/modules';

export const useStores = (): typeof stores => {
  return React.useContext(MobXProviderContext).rootStore;
};
