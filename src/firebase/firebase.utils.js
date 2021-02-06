import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyDaCIZNA6D9Ka1_ibURBPTTgeu4nFJxVA0",
    authDomain: "crwn-db-db505.firebaseapp.com",
    projectId: "crwn-db-db505",
    storageBucket: "crwn-db-db505.appspot.com",
    messagingSenderId: "539354566338",
    appId: "1:539354566338:web:ba442bf13eb8c3787df55b",
    measurementId: "G-HG044QXPTY"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  
  export default firebase;