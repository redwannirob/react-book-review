import {createContext, useEffect, useState  } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContex = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const logOut = ()=>{
        return signOut(auth)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email,password)
        
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const authInfo = {user,setUser,createUser,logIn,logOut}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
       </AuthContex.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}