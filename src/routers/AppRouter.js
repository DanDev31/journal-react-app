import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'

import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Loading } from '../components/loading/Loading';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';



export const AppRouter = () => {

  const dispatch = useDispatch()

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  useEffect(() => {

    onAuthStateChanged(auth, async (user)=> {

      if( user?.uid ){

        dispatch( login( user.uid, user.displayName ) )
        const notes = await loadNotes( user.uid )
        dispatch(setNotes(notes))

        setIsLoggedIn( true )
      } else {
        setIsLoggedIn( false )
      }

      setChecking(false)
      
    })


  }, [ dispatch, setChecking ])


  if( checking ){
    return (
      <Loading />
    )
  }

  return (
    <BrowserRouter>
        <Routes>

            {/* <Route path="/auth/*" element={<AuthRouter/>}/> */}

            <Route path="/auth/*" element={
            
              <PublicRoutes
                isLoggedIn = { isLoggedIn }
              >
                <AuthRouter/>

              </PublicRoutes>
              
            }/>


            <Route path="/*" element={
              
              <PrivateRoutes 
                isLoggedIn = { isLoggedIn }
              >
                <JournalScreen />

              </PrivateRoutes>

              }/>
        </Routes>
    
    </BrowserRouter>
  )
}
