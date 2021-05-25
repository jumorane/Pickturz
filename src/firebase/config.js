import firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 import 'firebase/auth';

 // Config firebase Web 
 var firebaseConfig = {
  apiKey: "AIzaSyAmYZyv5nXgtx3FV-89n0WX712ncWcPHdU",
  authDomain: "gall-c9e88.firebaseapp.com",
  databaseURL: "https://gall-c9e88-default-rtdb.firebaseio.com/",
  projectId: "gall-c9e88",
  storageBucket: "gall-c9e88.appspot.com",
  messagingSenderId: "846742037519",
  appId: "1:846742037519:web:900a2f326134b70886ef7a",
  measurementId: "G-LCD2YK55QE"
  };

  
class Firebase {
    //constructor () {
     // app.initializeApp(config);
      //this.auth = app.auth();
    //}
    
    //inscription
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
   
    //Connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    //Déconnexion
    signoutUser =() => this.auth.signOut()

  }

 
 // Initialisation firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
