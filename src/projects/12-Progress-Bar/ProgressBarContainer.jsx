import React, { useEffect, useRef } from 'react';
import Title from '../components/Title';

export default function ProgressBarContainer() {
   const inputStyle = {
      width: 50,
      border: 'none',
      textAlign: 'center',
      borderBottom: '1px solide lightgray',
   };

   const uiInput = useRef(null);
   useEffect(() => {
      uiInput.current.focus();
   });

   return (
      <div className='container container-sm m-auto text-center'>
         <Title text='Progress bars' />
         <h2>Project status:</h2>

         <ul>
            <li>
               UI Status:{' '}
               <input
                  type='number'
                  style={inputStyle}
                  onChange={(e) => console.log(e.target.value)}
                  ref={uiInput}
                  value={''}
               />
            </li>
            <li>
               Data Status:{' '}
               <input
                  type='number'
                  style={inputStyle}
                  onChange={(e) => console.log(e.target.value)}
                  value={''}
               />
            </li>
         </ul>
      </div>
   );
}
