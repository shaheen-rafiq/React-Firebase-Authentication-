import React,{useState,useEffect} from "react";
import './App.css';
import Login from "./Login"
import fire,{auth} from './fire'
import { signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import Hero from './Hero'
import { fireEvent } from "@testing-library/dom";

const App=()=> {
  const[user,setUser]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[passwordError,setPasswordError]=useState('');
  const[emailError,setEmailError]=useState('');
  const[hasAccount,setHasAccount]=useState(false); //to switch from sign in to sign up

  const clearInputs= ()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors= ()=>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin=()=>{
    clearErrors();
      signInWithEmailAndPassword(auth,email,password)
      .catch((error)=>{
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":  
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
  }

  const handleSignup=()=>{
    clearErrors();
      createUserWithEmailAndPassword(auth,email,password)
      // .catch(err=>{
      //   switch(err.code){
      //     case "auth/email-already-in-use":
      //     case "auth/invalid-email":
      //       setEmailError(err.message);
      //       break;
      //     case "auth/weak-password":
      //       setPasswordError(err.message);
      //       break;
      //   }
      // })
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
      });
  }

  const handleLogout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const authListener=()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        clearInputs();
        setUser(user.uid);
      }else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
    authListener(); 
  },[]);

  return (
    <div className="App">
      {
        hasAccount?(
          <Hero handleLogout={handleLogout} user={user}/>
        ):(
          <Login 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignup={handleSignup}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError} 
          />
        )
      }
      
    </div>
  );
}

export default App;
