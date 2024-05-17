import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCtBKrfM3ncXPQ5UHmIFvTXwRTjIWfCrP8',
  authDomain: 'ping-5a6f6.firebaseapp.com',
  projectId: 'ping-5a6f6',
  storageBucket: 'ping-5a6f6.appspot.com',
  messagingSenderId: '826271717242',
  appId: '1:826271717242:web:6dabfc5a9265dce49da8c3',
  measurementId: 'G-B81NKFVCLZ',
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
export const database = getFirestore();
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
