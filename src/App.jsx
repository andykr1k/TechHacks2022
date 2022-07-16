import * as React from 'react';
import {Header, Footer, Home, SignInPage, CreateEntryPage} from './components';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { motion } from "framer-motion";
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyC_-wGkDys7bx9DuIZFkoBjVLuozY21fqU",
  authDomain: "techhacks2022-b50d6.firebaseapp.com",
  projectId: "techhacks2022-b50d6",
  storageBucket: "techhacks2022-b50d6.appspot.com",
  messagingSenderId: "1031309348797",
  appId: "1:1031309348797:web:b0d279c8986216b1ea8cd4",
  measurementId: "G-97GJEFLE9E"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Header />
      <div >
        {user ? <SignOut /> : <div></div> }
      </div>
      <div >
        {user ? <CreateEntryPage />: <SignInPage /> }
      </div>
      {user ? <div></div> : <SignIn />}
      <Footer />
    </div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <motion.div whileHover={{scale: 1.2}}  className='flex absolute justify-center items-center bottom-0 right-0 m-5 bg-black rounded-md p-2'>
      <button className='text-white opacity-10' onClick={signInWithGoogle}>Sign In With Google</button>
    </motion.div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <motion.div whileHover={{scale: 1.2}}  className='flex absolute justify-center items-center bottom-0 right-0 m-5 bg-black rounded-md p-2'>
      <button className='text-white opacity-5' onClick={() => auth.signOut()}>Sign Out</button>
    </motion.div>
  )
}

export default App;
