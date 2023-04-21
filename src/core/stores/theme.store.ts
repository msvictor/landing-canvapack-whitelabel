import { action, makeObservable, observable, persist } from '~/modules';
import { breakpoints, toInt } from '~/utils/enums';
import { ThemeType, theme, themeFormatter } from '../theme';

const themeJson = themeFormatter(theme);
export default class ThemeStore {
  @persist('object')
  @observable
  theme: ThemeType = themeJson;

  @observable
  isTablet = false;

  @observable
  isDesktop = true;

  constructor() {
    makeObservable(this);
  }

  @action
  setDevice = (currentWidth: number): void => {
    this.isTablet = currentWidth < toInt(breakpoints.desktop);
    this.isDesktop = currentWidth >= toInt(breakpoints.desktop);
  };
}
