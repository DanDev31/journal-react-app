import React from 'react'

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import  validator  from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterEmailPasswordName } from '../../actions/auth'



export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const { msgError } = useSelector( state => state.ui)

  const [ formValues, handleInputChange ] = useForm({
    name: 'Daniel',
    email: 'daniel@gmail.com',
    password:'123456',
    password2:'123456',
  })

  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if( isFormValid() ){
      dispatch(startRegisterEmailPasswordName( email, password, name ))
    }
  }


  const isFormValid = () => {

    if( name.trim().length === 0 ){

      dispatch(setError('Name is required'))
      return false;

    } else if( !validator.isEmail( email ) ){

      dispatch(setError('Invalid email'))
      return false;

    } else if( password !== password2 || password.length < 5 ){

      dispatch(setError('Password should be at least 5 characters and match each other'))
      return false;
    }

    dispatch(removeError())
    return true;
  }

  return (
    <>
        <h3 className='auth__title'>Register</h3>

        {
          msgError && 
          (
            <div className='auth__alert-error'>
              { msgError }
            </div>
          )
        }

        <form onSubmit={ handleSubmit }>

            <input 
                className='auth__input'
                type='text'
                placeholder='Name'
                name='name'
                value={ name }
                autoComplete='off'
                onChange={ handleInputChange }
              />
              
              <input 
                className='auth__input'
                type='text'
                placeholder='Email'
                name='email'
                value={ email }
                autoComplete='off'
                onChange={ handleInputChange }
                required 
              />

              <input 
                className='auth__input'
                type='password'
                placeholder='Password'
                name='password'
                value={ password }
                onChange={ handleInputChange }
                required 
              />

              <input 
                className='auth__input'
                type='password'
                placeholder='Confirm password'
                name='password2'
                value={ password2 }
                onChange={ handleInputChange }
                required  
              />

              <button
                className='btn btn-primary btn-block mb-5'
                type='submit'
              >
                Send
              </button>

              
              <Link 
                className='link'
                to='/auth/login'>
                  
                Already registered?
              </Link>
        </form>
    </>
  )
}
