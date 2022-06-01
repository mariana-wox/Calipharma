import App from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!App.apps.length) {
          App.initializeApp(firebaseConfig);
        }

        this.db = App.firestore();
    }
}

const firebase = new Firebase();
export default firebase;