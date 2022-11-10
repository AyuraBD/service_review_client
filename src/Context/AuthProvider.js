import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //Create user with email/password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Login
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Sign with google
    const googleSignin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    //Log Out
    const logOut = () =>{
        return signOut(auth);
    }

    //Change user
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe ();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleSignin,
        logOut,        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;