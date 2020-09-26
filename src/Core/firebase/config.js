import { decode, encode } from 'base-64';
import './timerConfig';
global.addEventListener = (x) => x;
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  //apiKey: 'AIzaSyAOWHBpPhKoNhcGFKHH_Q_0AtL2gV-imgQ',
  //authDomain: 'production-a9404.firebaseapp.com',
  //databaseURL: 'https://production-a9404.firebaseio.com',
  //projectId: 'production-a9404',
  //storageBucket: 'production-a9404.appspot.com',
  //messagingSenderId: '525472070731',
  //appId: '1:525472070731:web:ee873bd62c0deb7eba61ce',

  apiKey: 'AIzaSyA0su9BQxnK1Tea7UZFtF7iadTTQfzYdNs',
  authDomain: 'cs530-teamiii.firebaseapp.com',
  databaseURL: 'https://cs530-teamiii.firebaseio.com',
  projectId: 'cs530-teamiii',
  storageBucket: 'cs530-teamiii.appspot.com',
  messagingSenderId: '1080031101382',
  appId: '1:1080031101382:web:a6303264e72f1ac931f2c7',
  measurementId: 'G-XEZPCZ097F',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
