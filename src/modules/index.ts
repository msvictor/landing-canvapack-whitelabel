import * as Toastify from 'react-toastify';
import * as FormValidator from 'yup';
import * as CNPJ from '@fnando/cnpj';
import * as CPF from '@fnando/cpf';

export { Toastify, FormValidator, CPF, CNPJ };
export {
  Formik as FormBehavior,
  type FormikProps,
  useFormikContext,
} from 'formik';
export { default as DateManager, type Moment } from 'moment';
export { default as Numeral } from 'numeral';
export { default as TextInputMask } from 'react-input-mask';
export { default as Animation } from 'react-lottie';
export { observer, inject, MobXProviderContext, Provider } from 'mobx-react';
export { persist, create } from 'mobx-persist';
export { action, makeObservable, observable, runInAction } from 'mobx';
export { isEmpty, groupBy, get } from 'lodash';
export {
  default as styled,
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
export { default as Modal } from 'react-modal';
export { Poppins } from 'next/font/google';
export { DefaultSeo, NextSeo } from 'next-seo';
export { initializeApp } from 'firebase/app';
export { doc, getDoc, getFirestore } from 'firebase/firestore';
export {
  type AnalyticsCallOptions,
  type EventParams,
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';
export { default as TagManager, type TagManagerArgs } from 'react-gtm-module';
export {
  fetchAndActivate,
  getBoolean,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';
