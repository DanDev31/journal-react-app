import Swal from 'sweetalert2'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";



//Functions to authenticate the user
//The dispatch function is given by redux thunk

export const startLoginEmailPassword = ( email, password ) => {

//this return calls a callback function because it is within an async function

    return ( dispatch ) => {

        dispatch( startLoading() );

        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {

           dispatch(login( user.uid, user.displayName ))

            dispatch( finishLoading() );

        })
        .catch(error => {
            console.log(error)
            dispatch( finishLoading() );
            Swal.fire('Error', 'User or password are incorrect, please try again.', 'error')
        })
         
    }
}


export const startRegisterEmailPasswordName = ( email, password, name ) => {

    return ( dispatch ) => {

        createUserWithEmailAndPassword( auth, email, password )
        .then( async ({ user }) => {

            await user.updateProfile({ displayName: name })

            dispatch(login( user.uid, user.displayName ))
        })
        .catch(error => {
            console.log(error)
            Swal.fire('Error', 'Something went wrong, please verify the information.', 'error')
        })
    }
}


export const startGoogleLogin = () => {

    return ( dispatch ) =>{

        signInWithPopup(auth, provider)
        .then(({ user }) => {

            dispatch(login( user.uid, user.displayName ))

        })
    }
}

//Main Actions LogIn and LogOut!!

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {

    return async ( dispatch ) => {
        await signOut(auth);

        dispatch( logout() );
    }
};

export const logout = () => ({
    type: types.logout
});

