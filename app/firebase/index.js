import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDVvg-3Vj3545B-31gpFta-lpGG95K8Eps",
    authDomain: "mwt-react-todo.firebaseapp.com",
    databaseURL: "https://mwt-react-todo.firebaseio.com",
    projectId: "mwt-react-todo",
    storageBucket: "mwt-react-todo.appspot.com",
    messagingSenderId: "379385038778"
  };

  firebase.initializeApp(config);
} catch (e) {
  throw new Error(e);
}

export const firebaseRef = firebase.database().ref();

export default firebase;
