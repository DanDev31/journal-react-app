import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";



export const startNewNote = () => {

    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getDate()
        }

        const colRef = collection(db, `${uid}/journal/notes`)//Create the reference to FireStore and the path of key:value
        const docRef = await addDoc(colRef, newNote) //Create the new document
        
        dispatch( activeNote( docRef.id, newNote ) )
    }
}



export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

