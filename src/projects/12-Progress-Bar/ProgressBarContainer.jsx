import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import { ProgressBar } from '../components/ProgressBar';

export default function ProgressBarContainer() {
   const [completed, setCompleted] = useState(0);

   const projectData = [
      {
         bgColor: '#7633f9',
         completed: 57,
      },
      {
         bgColor: '#28a745',
         completed: 20,
      },
      {
         bgColor: '#dc3545',
         completed: 88,
      },
   ];

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
         {projectData.map((data) => (
            <ProgressBar
               key={data.bgColor}
               bgColor={data.bgColor}
               completed={data.completed}
            />
         ))}
      </div>
   );
}
