import React from 'react';
import NewNote from './NewNote';
import Button from '../components/Button';

export default function NoteApp() {
   return (
      <div className='container'>
         <Button btnClass='btn-success' text='+ New note' />

         <div
            className='container container-sm d-flex'
            style={{ gap: 25, flexWrap: 'wrap' }}
         >
            <NewNote />
         </div>
      </div>
   );
}
