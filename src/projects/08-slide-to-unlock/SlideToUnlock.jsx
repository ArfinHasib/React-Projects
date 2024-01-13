import React, { useState } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';

export default function SlideToUnlock() {
   const [showLockSlider, setShowLockSlider] = useState(false);

   return (
      <div
         className='container text-center d-flex flex-column border-20'
         style={{
            height: '70vh',
            marginTop: '15vh',
            width: 340,
            border: '4px solid #121212',
         }}
      >
         <h1 className='title'>title</h1>
         {showLockSlider ? (
            <LockSlider width='250px' />
         ) : (
            <AiFillUnlock className='unlockIcon' />
         )}
      </div>
   );
}
