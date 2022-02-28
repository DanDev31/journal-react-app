import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"


export const loadNotes = async ( uid ) => {

    
    const colRef = collection(db, `${uid}/journal/notes`);
    const notesSnapshot = await getDocs(colRef);
    const notes = [];

    notesSnapshot.forEach( snapShot => {

        notes.push({
            id: snapShot.id,
            ...snapShot.data(),
        })

    })

    return notes;

}