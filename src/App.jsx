import * as React from 'react';
import {Header, Footer, Home, SignInPage, GeneralChat} from './components';
import firebase from 'firebase/compat/app';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from "framer-motion";
import logoutLogo from './assets/logout.png'
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
    <BrowserRouter>
      <div>
      <Header />
      <div >
        {user ? <SignOut /> : <div></div> }
      </div>
      <div class="sectionHolder">
      {user ? 
      <div>
        <Routes>
          <Route path="/" element={<GeneralChat />}/>
          <Route path="/" element={<ProfilePage />}/>
        </Routes>
      </div>
        : 
        <SignInPage /> 
      }
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <motion.div whileHover={{scale: 1.2}} className='bg-black m-2 p-5 bg-opacity-10 rounded-md'>
      <button className='text-white' onClick={signInWithGoogle}>Sign In With Google</button>
    </motion.div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div class='signingout'>
      <motion.div whileHover={{scale: 1.2}} className='absolute bottom-0 right-0 bg-black m-2 p-2 bg-opacity-10 rounded-md visible md:invisible'>
      <img className='text-white' src={logoutLogo} onClick={() => auth.signOut()}/>
    </motion.div>
    <motion.div whileHover={{scale: 1.2}} className='flex absolute bottom-0 right-0  bg-black m-2 p-2 bg-opacity-10 rounded-md invisible md:visible'>
      <button className='text-white' onClick={() => auth.signOut()}>Sign Out</button>
    </motion.div>
    </div>

  )
}

export function ChatRoom(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoUrl } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoUrl: auth.currentUser.photoURL
    })

    setFormValue('');
  }
  
  return (
    <>
    <div className='absolute bottom-0'>
      <div className=''>
        {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg}/>)}
      </div>

      <form onSubmit={sendMessage}>
      <input className=' bg-black m-2 p-2 bg-opacity-10 rounded-md' value={formValue} onChange={(e)=> setFormValue(e.target.value)} placeholder="Send Message"/>
      <button className=' bg-black m-2 p-2 bg-opacity-10 rounded-md font-bold' type="submit">Send</button>
      </form>
    </div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoUrl } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div class="message">
      <motion.img whileHover={{scale:3}} className='w-5 m-1 rounded-md' src={photoUrl} />
      <p className='text-white m-1'>{text}</p>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className='h-screen'>
      <div className='flex justify-center items-center'>
        <div>
          <h1 className='text-white text-2xl top-0 m-5'> Profile </h1>
            <div className='grid place-items-center'>
            <h1> ${auth.currentUser.displayName} </h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
