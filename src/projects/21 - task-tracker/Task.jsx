import React from 'react';
import Button from '../components/Button';

export default function Task({ date, type, setDate, setType, onClick }) {
   return (
      <div
         className='d-flex'
         style={{
            justifyContent: 'space-between',
            borderBottom: '1px solid #666',
         }}
      >
         <input type='datetime-local' value={date} onChange={setDate} />
         <input
            type='text'
            value={type}
            onChange={setType}
            placeholder='Specify the task'
         />
         <Button text='+ Add' btnClass='btn' onClick={onClick} />
      </div>
   );
}
