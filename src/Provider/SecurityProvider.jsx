import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// firebase imports
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const SecurityContext = createContext(null);
const SecurityProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register User (Register Page)
  const registerUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User (Login Page)
  //   login with email
  const loginUserUsingEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Login with github
  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Update User Data
  const handleUpdateUserPhoto = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  // Sign out user
  const handleSignOut = () => {
    signOut(auth);
  };

  // User infromation watcher
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  console.log("User infromation:", user);

  const securityContextValue = {
    user,
    loading,
    registerUserWithEmailAndPassword,
    loginUserUsingEmailAndPassword,
    loginWithGoogle,
    loginWithGithub,
    handleUpdateUserPhoto,
    handleSignOut,
  };
  return (
    <SecurityContext.Provider value={securityContextValue}>
      {children}
    </SecurityContext.Provider>
  );
};

SecurityProvider.propTypes = {
  children: PropTypes.node,
};
export default SecurityProvider;
