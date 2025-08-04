import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidateData } from '../utils/Validate';
import { addUser } from '../utils/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { BGLOGO } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return; 

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                })
                .then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email:email, displayName:displayName}));
                    
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" - "+errorMessage);
            });
        }

        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
    };

    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img 
                    src = {BGLOGO}
                    alt="bglogo"
                />
            </div>
            <form 
                onSubmit={handleButtonClick}
                className='
                    absolute w-3/4 md:w-2/6 p-12 bg-black bg-opacity-80  mx-auto right-0 left-0
                     text-white rounded-md mt-28 md:my-36
                    
                '
            >
                <h1 
                    className='font-bold text-3xl py-4'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && <input type="text" placeholder='Full Name' ref={name}
                    className='p-4 my-3 w-full bg-gray-700 rounded-md focus:outline-red-400'/>
                }              

                <input type="text" placeholder='Username or Email' ref={email}
                    className='p-4 my-3 w-full bg-gray-700 rounded-md focus:outline-red-400'
                />

                <input type="password" placeholder="Password" ref={password}
                    className='p-4 my-3 w-full bg-gray-700 rounded-md focus:outline-red-400'
                />

                {/*!isSignInForm && <input type="text" placeholder='Enter Password Again' 
                    // className='p-4 my-3 w-full bg-gray-700 rounded-md focus:outline-red-400'/>
                */}

                <p className='text-red-700 font-bold text-lg pl-4 my-3 text-center'>{errorMessage}</p>

                <button type='submit' 
                    className='p-4 my-3 bg-red-600 w-full rounded-md'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                {/* <button onClick={(e) => e.preventDefault()}></button> */}
                {/*Normally when we create a button like above it will default be submittable,
                for preventing that use like this*/}
                
                <p className='pl-4 my-3 text-center cursor-pointer' onClick={toggleSignInForm}>
                   {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"} 
                </p>
            </form>                        
        </div>
        
    )
};

export default Login;