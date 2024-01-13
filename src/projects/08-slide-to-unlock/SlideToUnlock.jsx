import React, { useState } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';
import LockScrenImg from './img/moon.jpg';
import HomeScrenImg from './img/home.jpg';

export default function SlideToUnlock() {
   const [uiProps, seUiProps] = useState({
      uiText: 'Unlock screen',
      uiColor: '#eee',
      uiBg: `url(${LockScrenImg}) center/cover`,
   });
   const [showLockSlider, setShowLockSlider] = useState(false);

   return (
      <div
         className='container text-center d-flex flex-column border-20 shadow-md'
         style={{
            height: '70vh',
            marginTop: '15vh',
            width: 340,
            border: '4px solid #121212',
            background: uiProps.uiBg,
         }}
      >
         <h1 className='title' style={{ color: uiProps.uiColor }}>
            {uiProps.uiText}
         </h1>
         {showLockSlider ? (
            <LockSlider width='250px' />
         ) : (
            <AiFillUnlock className='unlockIcon' />
         )}
      </div>
   );
}
