/* eslint-disable prettier/prettier */

import app from 'firebase/arp';
import 'firebase/firestore';

import firebaseConfig from './config';


class Firebase {
    constructor() {
      if (!app.getApps.length) {
        app.initializeApp(firebaseConfig);
      }
      this.db = app.firestore();
    }
  }

  const firebase = new Firebase();
  export default firebase;
