import { createContext, useState } from "react";
import PropTypes from 'prop-types'
// firebase imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const SecurityContext = createContext(null);
const SecurityProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]=useState(true);

    // Register User (Register Page)
    const registerUserWithEmailAndPassword=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }



    // Update User Data
    const handleUpdateUserPhoto=(user,name,photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }
    // Sign out user
    const handleSignOut=()=>{
        signOut(auth);
    }

    const securityContextValue={
        user,
        loading,
        registerUserWithEmailAndPassword,
        handleUpdateUserPhoto,
        handleSignOut
    }
    return (
        <SecurityContext.Provider value={securityContextValue}>
            {children}
        </SecurityContext.Provider>
    );
};


SecurityProvider.propTypes={
    children:PropTypes.node
}
export default SecurityProvider;