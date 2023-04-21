import { create } from '~/modules';
import { isServer } from '~/utils';
import ThemeStore from './theme.store';

class RootStore {
  theme: ThemeStore;

  constructor() {
    this.theme = new ThemeStore();
  }
}

const store = new RootStore();

if (!isServer()) {
  const hydrate = create({
    store: localStorage,
  });
  hydrate('theme', store.theme);
}

export { ThemeStore };
export default store;
