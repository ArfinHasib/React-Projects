import React, { useRef, useEffect, useState } from 'react';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';
import { FormAnimation, LoginContainer } from './FormStyle';

export default function AnimatedLoginForm() {
   let emailRef = useRef(null);
   let passWordRef = useRef(null);

   useEffect(() => {
      emailRef.current.focus();
   }, []);

   const [rotate, setRotate] = useState({
      animation: '',
      borderColor: '',
      background: '',
   });

   let formStyle = {
      width: 350,
      marginTop: '15vh',
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (emailRef.current.value !== '' && passWordRef.current.value !== '') {
         setRotate({
            animation: 'animate',
            borderColor: 'green',
            background: 'green',
         });
      } else {
         setRotate({
            animation: '',
            borderColor: 'red',
         });
      }
   };

   return (
      <LoginContainer className={rotate.animation}>
         <FormAnimation
            background={rotate.background}
            borderColor={rotate.borderColor}
            className={rotate.animation}
         ></FormAnimation>
         <form
            className='card m-1 m-auto'
            style={formStyle}
            onSubmit={handleSubmit}
         >
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
      </LoginContainer>
   );
}
