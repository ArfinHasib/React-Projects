import React, { useRef, useEffect } from 'react';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';
import { FormAnimation, FormStyle } from './FormStyle';

export default function AnimatedLoginForm() {
   let emailRef = useRef(null);
   let passWordRef = useRef(null);

   useEffect(() => {
      emailRef.current.focus();
   }, []);

   let formStyle = {
      width: 350,
      marginTop: '15vh',
   };

   return (
      <FormStyle>
         <FormAnimation></FormAnimation>
         <form className='card m-1 m-auto' style={formStyle}>
            <h2 className='subtitle my-2'>Login</h2>
            <FormGroup
               labelText='Email'
               inputType='email'
               reference={emailRef}
            />
            <FormGroup
               labelText='Password'
               inputType='password'
               reference={passWordRef}
            />
            <div className='form-group'>
               <Button btnClass='btn-block' text='Submit' />
               <small className='text-accept'>Don't have an account?</small>
               <label
                  className='mt-1 fw-200 text-right'
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
               >
                  Register
               </label>
            </div>
         </form>
      </FormStyle>
   );
}
