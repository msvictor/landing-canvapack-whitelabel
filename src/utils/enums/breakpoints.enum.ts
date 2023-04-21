export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1366px',
  xxl: '1600px',
} as Breakpoints;

export const mqDevices = {
  inMobile: `(max-width: ${breakpoints.tablet})`,
  inTablet: `(max-width: ${breakpoints.desktop})`,
  inDesktop: `(min-width: ${breakpoints.desktop})`,
  inMobileAndTablet: `(max-width: ${breakpoints.desktop})`,
  inSmallMobile: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.tablet})`,
  inExtraSmallMobile: `(max-width: ${breakpoints.xs})`,
  inSmallDesktop: `(max-width: ${breakpoints.xl})`,
} as TypeDevice;

export const toInt = (value: string): number => {
  return parseInt(value.split('px')[0], 10);
};
