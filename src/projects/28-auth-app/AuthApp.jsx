import React, { useState } from 'react';
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';

export default function AuthApp() {
   const [ui, setUi] = useState({
      wrapper: true,
      title: 'Authenticate',
   });

   return (
      <div className='container' style={{ width: 300 }}>
         <Title text={ui.title} />

         {ui.wrapper && (
            <>
               <FormGroup
                  labelText='User name'
                  inputType='text'
                  placeholder='Enter your name'
                  values=''
               />
               <FormGroup
                  labelText='Password'
                  inputType='password'
                  placeholder='Enter your password'
                  values=''
               />
            </>
         )}
      </div>
   );
}
