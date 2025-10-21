import React, { createContext, useEffect, useState } from 'react';
import { app } from '../FireBase/FireBase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign out
    const signout = () => { return signOut(auth); }



    // console.log(user);
    // statechange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    // 
    const authData = {
        user, setUser, createUser, signout, signIn,
    }
    return <AuthContext value={authData} >{children}</AuthContext>
};

export default AuthProvider;