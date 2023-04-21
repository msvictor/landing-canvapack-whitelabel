import {
  AnalyticsCallOptions,
  EventParams,
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../config/firebaseConfig';

const { REACT_APP_ENV } = process.env;

initializeApp(firebaseConfig);
const analytics = getAnalytics();

if (REACT_APP_ENV === 'PROD') {
  setAnalyticsCollectionEnabled(analytics, true);
} else {
  setAnalyticsCollectionEnabled(analytics, false);
}

type Event = {
  eventName: string;
  eventParams: EventParams;
  option?: AnalyticsCallOptions;
};
export default class Analytics {
  static logEvent(
    eventName: string,
    eventParams?: EventParams,
    option?: AnalyticsCallOptions,
  ): void {
    logEvent(analytics, eventName, eventParams, option);
  }

  static logButtonClick({ eventName, eventParams, option }: Event): void {
    logEvent(analytics, eventName, eventParams, option);
  }
}
