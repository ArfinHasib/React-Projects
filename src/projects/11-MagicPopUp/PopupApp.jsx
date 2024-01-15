import React, { useState, useEffect } from 'react';
import Popup from '../components/Popup.component';
import Button from '../components/Button';
import Title from '../components/Title';

export default function PopupApp() {
   const [trigger, setTrigger] = useState(false);
   const [timeTrigger, setTimeTrigger] = useState(false);
   const [waringTrigger, setWaringTrigger] = useState(false);

   const handleTrigger = () => {
      console.log('trigger');
      setTrigger(true);
   };

   useEffect(() => {
      setTimeout(() => {
         setTimeTrigger(true);
      }, 3000);
      setTimeout(() => {
         setWaringTrigger(true);
      }, 8000);
   }, []);

   return (
      <div className='text-center'>
         <Title text='Click for popup, or weight 3 seconds' />

         <Button btnClass='btn-primary' onClick={handleTrigger} />

         <Popup
            type={'alert-info'}
            title='Triggered Popup'
            text='This popup was triggered by a button'
            handleClose={() => setTrigger(false)}
            trigger={trigger}
         />

         <Popup
            type={'alert-danger'}
            title='Timed Triggered Popup'
            text='This popup was triggered by a delay'
            handleClose={() => setTimeTrigger(false)}
            trigger={timeTrigger}
         />

         <Popup
            type={'alert-warning'}
            title='Timed Triggered Popup'
            text='This popup was triggered by a delay'
            handleClose={() => setWaringTrigger(false)}
            trigger={waringTrigger}
         />
      </div>
   );
}
