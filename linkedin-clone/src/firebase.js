import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyC1SSKF_up4WVzuzQy1NUabb9JKUZExinw",
    authDomain: "linkedin-clone-yt-10c93.firebaseapp.com",
    projectId: "linkedin-clone-yt-10c93",
    storageBucket: "linkedin-clone-yt-10c93.appspot.com",
    messagingSenderId: "945971734181",
    appId: "1:945971734181:web:ca269ecccbbc78cf7e0f4c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};