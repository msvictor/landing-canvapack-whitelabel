import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirestoreService {
  static async getDocData(collection: string, docName: string): Promise<any> {
    return (await getDoc(doc(db, collection, docName))).data();
  }
}
