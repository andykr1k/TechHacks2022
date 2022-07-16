import * as React from 'react';
import {Header, Footer, Home, SignIn} from './components';
import Firebase from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './App.css';


const firebaseConfig = {
  apiKey: "AIzaSyC_-wGkDys7bx9DuIZFkoBjVLuozY21fqU",
  authDomain: "techhacks2022-b50d6.firebaseapp.com",
  projectId: "techhacks2022-b50d6",
  storageBucket: "techhacks2022-b50d6.appspot.com",
  messagingSenderId: "1031309348797",
  appId: "1:1031309348797:web:b0d279c8986216b1ea8cd4",
  measurementId: "G-97GJEFLE9E"
};

const app = Firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const [user] = useAuthState(auth);

function App() {
  return (
    <div>
      <Header />
      {user ? <Home /> : <SignIn />}
      <Footer />
    </div>
  )
}

export default App;
