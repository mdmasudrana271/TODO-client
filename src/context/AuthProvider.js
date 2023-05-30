import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children})=>{

    const [user, setUser] = useState()

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const signIn = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const logOut = ()=>{
      signOut(auth)
      .then(()=>{
        console.log('log out success')
        localStorage.removeItem('todoAppAccessToken')
      })
      .catch(error => {
        console.log(error.message)
      })
    }

    const updateUserProfile =(profile)=>{
      setLoading(true)
     return updateProfile(auth.currentUser, profile)
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
          setLoading(false)
        })
        return ()=>{
          unsubscribe();
        }
      },[])



    const authInfo = {createUser, signIn, logOut, loading,error, setError,user, updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;