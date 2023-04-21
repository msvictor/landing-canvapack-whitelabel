import { firebaseConfig } from '~/core';
import { doc, getDoc, getFirestore, initializeApp } from '~/modules';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirestoreService {
  static async getDocData(collection: string, docName: string): Promise<any> {
    return (await getDoc(doc(db, collection, docName))).data();
  }
}
