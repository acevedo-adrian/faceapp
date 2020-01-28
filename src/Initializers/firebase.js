import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6LBBiHuJn3nDyC6gt5kDd7vc99gKv1AM",
    authDomain: "faceapp-cb6a2.firebaseapp.com",
    databaseURL: "https://faceapp-cb6a2.firebaseio.com",
    projectId: "faceapp-cb6a2",
    storageBucket: "faceapp-cb6a2.appspot.com",
    messagingSenderId: "407139692764",
    appId: "1:407139692764:web:be4e11b81f9f711f538419",
    measurementId: "G-1EBFMCEHLR"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;