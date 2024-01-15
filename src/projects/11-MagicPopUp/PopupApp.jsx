import React, { useState } from 'react';
import Popup from '../components/Popup.component';
import Button from '../components/Button';
import Title from '../components/Title';

export default function PopupApp() {
   const [trigger, setTrigger] = useState(false);

   const handleTrigger = () => {
      console.log('trigger');
      setTrigger(true);
   };

   return (
      <div className='text-center'>
         <Title text='Click for popup, or weight 3 seconds' />

         <Button btnClass='btn-primary' onClick={handleTrigger} />
         {trigger && (
            <Popup
               type={'alert-info'}
               title='Triggered Popup'
               text='This popup was triggered by a button'
               handleClose={() => setTrigger(false)}
            />
         )}
      </div>
   );
}
