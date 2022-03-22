import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDmLJx71oTdHDE4atIQNePiIqUPyi1DyPc",
  authDomain: "datagrokr-eeeb5.firebaseapp.com",
  projectId: "datagrokr-eeeb5",
  storageBucket: "datagrokr-eeeb5.appspot.com",
  messagingSenderId: "50299272324",
  appId: "1:50299272324:web:66ae89f13d7bdf9fb316d1"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
export default db;