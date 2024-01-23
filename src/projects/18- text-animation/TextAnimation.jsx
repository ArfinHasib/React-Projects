import React from 'react';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';

export default function TextAnimation() {
   return (
      <div className='container text-center'>
         <form
            className='container d-flex mt-4'
            onSubmit={(e) => e.preventDefault()}
         >
            <FormGroup
               labelText={'Type in your text to be animated'}
               inputType='text'
               placeholder='Your Text'
               values=''
            />
            <Button text='Clear' btnClass='btn-large btn-danger' />
         </form>
         animate Text
      </div>
   );
}
