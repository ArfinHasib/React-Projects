import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import { ProgressBar } from '../components/ProgressBar';

export default function ProgressBarContainer() {
   const [completed, setCompleted] = useState(56);
   const [status, setStatus] = useState({
      ui: 55,
      ux: 99,
      data: 20,
   });

   const projectData = [
      {
         bgColor: '#7633f9',
         completed: status.ui,
      },
      {
         bgColor: '#28a745',
         completed: status.ux,
      },
      {
         bgColor: '#dc3545',
         completed: status.data,
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
      setInterval(() => {
         setCompleted(Math.floor(Math.random() * 100) + 1);
      }, 2000);
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
                  ref={uiInput}
                  value={status.ui}
                  onChange={(e) => setStatus({ ...status, ui: e.target.value })}
               />
            </li>
            <li>
               Data Status:{' '}
               <input
                  type='number'
                  style={inputStyle}
                  value={status.ux}
                  onChange={(e) => setStatus({ ...status, ux: e.target.value })}
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
         <ProgressBar
            bgColor={completed > 50 ? '#7633f9' : '#dc3545'}
            completed={completed}
         />
      </div>
   );
}
