import { create } from '~/modules';
import ThemeStore from './theme.store';

class RootStore {
  theme: ThemeStore;

  constructor() {
    this.theme = new ThemeStore();
  }
}

const hydrate = create({
  storage: localStorage,
});

const store = new RootStore();

hydrate('theme', store.theme);

export { ThemeStore };
export default store;
