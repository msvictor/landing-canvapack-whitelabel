/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { TagManager, TagManagerArgs } from '~/modules';

const { REACT_APP_GMT_ID, REACT_APP_ENV } = process.env;
export default class GoogleTagManager {
  static getGmtId(): TagManagerArgs {
    const gtmId = REACT_APP_GMT_ID!;

    const tagManagerArgs: TagManagerArgs = {
      gtmId,
    };

    return tagManagerArgs;
  }

  static init(): void {
    if (REACT_APP_ENV === 'PROD') {
      TagManager.initialize(this.getGmtId());
    }
  }
}
