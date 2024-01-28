import React from 'react';
import { NewTaskStyle } from './TableStyle';

export default function NewTask({ type, date }) {
   return (
      <NewTaskStyle>
         <div>
            <h3>{type}</h3>
            <small className='text-danger'>{date}</small>
         </div>
      </NewTaskStyle>
   );
}
