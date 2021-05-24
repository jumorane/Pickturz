import firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Config firebase Web 
 var firebaseConfig = {
    apiKey: "AIzaSyDPStftLPHXcp1FoHMZPqv7mhxP6qC5aDA",
    authDomain: "galleryproject-444ba.firebaseapp.com",
    projectId: "galleryproject-444ba",
    storageBucket: "galleryproject-444ba.appspot.com",
    messagingSenderId: "591466862698",
    appId: "1:591466862698:web:95e8d9136402c6dc4f1213"
  };
 // Initialisation firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };