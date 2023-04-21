import {
  fetchAndActivate,
  getBoolean,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';
import { isEmpty } from '~/modules';

const remoteConfig = getRemoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 0;

export default class RemoteConfigService {
  static async setup(params: DefaultParamsRemoteConfig): Promise<void> {
    remoteConfig.defaultConfig = params;
    await fetchAndActivate(remoteConfig);
  }

  static async fetch(): Promise<boolean> {
    return fetchAndActivate(remoteConfig);
  }

  static async getValue(key: string): Promise<string> {
    return getValue(remoteConfig, key).asString();
  }

  static async getValueJson(key: string): Promise<any> {
    const valueJson = getValue(remoteConfig, key);
    return !isEmpty(valueJson.asString()) && JSON.parse(valueJson.asString());
  }

  static async getBoolean(key: string): Promise<boolean> {
    return getBoolean(remoteConfig, key);
  }
}
