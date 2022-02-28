import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NoteAppBar />

        <div className="notes__content">

            
                <input 
                    type="text" 
                    className="notes__title-input"
                    placeholder='Some awesome title'
                    autoComplete='off' 
                />

                <textarea
                    className='notes__textarea' 
                    placeholder='What happened today?'
                ></textarea>

                <div className="notes__image">
                    <img 
                    src="https://www.newstatesman.com/wp-content/uploads/sites/2/2022/02/GettyImages-459522809-1.jpg" 
                    alt="notes" />
                </div>
            

        </div>
    </div>
  )
}
