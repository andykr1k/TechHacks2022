import * as React from 'react';
import {Home, SignInPage, GeneralChat, SettingsPage} from './components';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { motion } from "framer-motion";
import logoutLogo from './assets/logout.png'
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  const dummy = React.useRef();
  return (
    <BrowserRouter>
      <div>
      <span ref={dummy}></span>
        <Header />
        <div >
          {user ? <SignOut /> : <div></div> }
        </div>
        <div className=''>
          <div class="sectionHolder">
            {user ? 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<GeneralChat />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
            : <div></div> }
            {user ? <div></div> : <SignInPage /> }
          </div>
        </div>
        {user ? <Footer /> : <div></div> }
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
      <motion.div whileHover={{scale: 1.2}} className='absolute bottom-0 right-0 bg-black m-5 p-2 bg-opacity-10 rounded-md visible md:invisible'>
      <img className='text-white' src={logoutLogo} onClick={() => auth.signOut()}/>
    </motion.div>
    <motion.div whileHover={{scale: 1.2}} className='flex absolute bottom-0 right-0  bg-black m-5 p-2 bg-opacity-10 rounded-md invisible md:visible'>
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
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <>
    <div className='absolute bottom-0 m-5'>
      <div className=''>
        {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg}/>)}
      </div>

      <form className='flex' onSubmit={sendMessage}>
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
    <div class="message" className='flex  flex-row-reverse p-1 space-between'>
      <motion.img whileHover={{scale:3}} className='h-10 w-10 rounded-full' src={photoUrl} />
      <p className='text-white bg-black bg-opacity-5 p-2'>{text}</p>
    </div>
  )
}

function Header() {
  return (
    <div>
        <motion.div whileHover={{scale:1.2}} className='grid absolute m-5 top-0 left-0 text-white bg-black bg-opacity-10 p-3 rounded-md text-xs'>
          <motion.a whileHover={{color:'blue'}} href="/" className='text-xs'>The Daily</motion.a>
        </motion.div>
        <div className='grid absolute m-5 top-0 right-0 text-white bg-black p-2 bg-opacity-10 rounded-md invisible md:visible'>
            <motion.a href="/chat" whileHover={{scale:1.2, color: 'blue'}} className='m-auto'>Chat</motion.a>
            <motion.a href="/profile" whileHover={{scale:1.2, color: 'blue'}} className='m-auto mt-5'>Profile</motion.a>
            <motion.a href="/settings" whileHover={{scale:1.2, color: 'blue'}} className='m-auto mt-5'>Settings</motion.a>
        </div>
        <div className='grid absolute m-5 top-0 right-0 text-white bg-black p-3 bg-opacity-10 rounded-md visible md:invisible text-xs'>
          <Dropdown  id="dropdown-basic-button">
            <Dropdown.Toggle> Menu </Dropdown.Toggle>
            <Dropdown.Menu className='grid text-white bg-black bg-opacity-10 rounded-md visible md:invisible text-xs'>
              <Dropdown.Item href="/chat" className='' >Chat</Dropdown.Item>
              <Dropdown.Item href="/profile" className=''>Profile</Dropdown.Item> 
              <Dropdown.Item href="/settings" className=''>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='flex absolute justify-center items-center bottom-0 m-5'>
        <motion.img whileHover={{scale:1.2}} className='w-10 rounded-full' src={auth.currentUser.photoURL} />
    </div>
  )
}

function ProfilePage() {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='flex justify-center items-center text-center'>
        <div>
            <div class="profpic" className='grid place-items-center mt-10'>
              <img className='rounded-full' src={auth.currentUser.photoURL} />
              <h1 className='text-2xl top-0 m-5 text-white font-extrabold'> {auth.currentUser.displayName.toUpperCase()} </h1>
              <h2 className='text-white text-xs'> {auth.currentUser.email} </h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
