import React from 'react';
import Button from '../components/Button';

export default function Popup({ type, title, text, handleClose, trigger }) {
   const popupContainer = {
      position: 'absolute',
      top: '0',
      height: '100vh',
      width: '100vw',
      background: 'rgba(0, 0, 0, .1)',
   };

   const popupStyle = {
      position: 'relative',
      margin: '40vh auto',
      zIdex: '1',
   };

   return (
      trigger && (
         <div style={popupContainer}>
            <div className={`${type}`} style={popupStyle}>
               <div className='alert-close'>
                  <div className='d-flex flex-column text-left'>
                     <h4 className='mb-1'>{title}</h4>
                     <p>{text && text}</p>
                  </div>
                  <Button
                     btnClass='btn-close'
                     text='&times;'
                     onClick={handleClose}
                  />
               </div>
            </div>
         </div>
      )
   );
}
