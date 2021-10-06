// import { initializeApp } from "firebase/app";

//INITAL TRY:

// const firebaseConfig = {
// apiKey: "AIzaSyARsoFYpgDu8u7Yzwux7TPITYP6oMGLpoo",
// authDomain: "react-device-reg.firebaseapp.com",
// projectId: "react-device-reg",
// storageBucket: "react-device-reg.appspot.com",
// messagingSenderId: "879329272741",
// appId: "1:879329272741:web:c4c0d80d1e6afdc560fe4c"
// };

// // Initialize Firebase
// const fire = initializeApp(firebaseConfig);

// export default fire;


//ANOTHER TRY USING OLDER SYNTAX:
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// var firebaseConfig = {
// apiKey: "AIzaSyARsoFYpgDu8u7Yzwux7TPITYP6oMGLpoo",
// authDomain: "react-device-reg.firebaseapp.com",
// projectId: "react-device-reg",
// storageBucket: "react-device-reg.appspot.com",
// messagingSenderId: "879329272741",
// appId: "1:879329272741:web:c4c0d80d1e6afdc560fe4c"
// };

// const fire = initializeApp(firebaseConfig);

// export default fire;

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig ={
    apiKey: "AIzaSyARsoFYpgDu8u7Yzwux7TPITYP6oMGLpoo",
    authDomain: "react-device-reg.firebaseapp.com",
    projectId: "react-device-reg",
    storageBucket: "react-device-reg.appspot.com",
    messagingSenderId: "879329272741",
    appId: "1:879329272741:web:c4c0d80d1e6afdc560fe4c"
};

//ANOTHER TRY:
// const auth = getAuth(app)

// export default { auth }

// ANOTHER TRY:
// export const auth = app.auth()
// export default app



const fire = initializeApp(firebaseConfig);
export const auth = getAuth(); 
export default fire;
