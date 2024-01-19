import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Alert from '../components/Alert';

export default function RegForm() {
   const inputName = useRef(null);
   const inputEmail = useRef(null);
   const inputPassword = useRef(null);
   useEffect(() => {
      inputName.current.focus();
   }, inputName);

   const [values, setValues] = useState({
      user_name: '',
      email: '',
      password: '',
   });

   const handleNameChange = (e) => {
      setValues({ ...values, user_name: e.target.value });
   };

   const handleEmailChange = (e) => {
      setValues({ ...values, email: e.target.value });
   };

   const handlePasswordChange = (e) => {
      setValues({ ...values, password: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!values.user_name) {
         inputName.current.focus();
      } else if (!values.email) {
         inputEmail.current.focus();
      } else if (!values.password) {
         inputPassword.current.focus();
      }
   };

   return (
      <div className='m-auto'>
         <div className='container m-auto mt-4 p-2 shadow-sm border-5'>
            <Title text='Registration' />
            <form onSubmit={handleSubmit}>
               <div className='form-group'>
                  <input
                     type='text'
                     placeholder='Enter your Name'
                     ref={inputName}
                     value={values.user_name}
                     onChange={handleNameChange}
                  />
                  <label className='text-danger'>Please enter your name</label>
               </div>
               <div className='form-group'>
                  <input
                     type='email'
                     placeholder='Enter your Email'
                     ref={inputEmail}
                     value={values.email}
                     onChange={handleEmailChange}
                  />
                  <label className='text-danger'>Please enter your email</label>
               </div>
               <div className='form-group'>
                  <input
                     type='password'
                     placeholder='Enter your Password'
                     ref={inputPassword}
                     value={values.password}
                     onChange={handlePasswordChange}
                  />
                  <label className='text-danger'>
                     Please enter your password
                  </label>
               </div>
               <Button
                  btnClass='btn-primary btn-lg btn-block'
                  text='Register'
               ></Button>
            </form>
         </div>
      </div>
   );
}
