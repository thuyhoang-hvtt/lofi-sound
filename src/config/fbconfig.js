import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCxbOqPsiQHGDvYzDRk1fZmHCvlDluzKD0",
  authDomain: "lofi-sound.firebaseapp.com",
  databaseURL: "https://lofi-sound.firebaseio.com",
  projectId: "lofi-sound",
  storageBucket: "lofi-sound.appspot.com",
  messagingSenderId: "38241580008",
  appId: "1:38241580008:web:743ea20a921b66a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 