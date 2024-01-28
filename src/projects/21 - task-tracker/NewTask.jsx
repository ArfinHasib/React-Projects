import React from 'react';
import { NewTaskStyle } from './TableStyle';
import Button from '../components/Button';
import { RiDeleteBin6Fill } from 'react-icons/ri';

export default function NewTask({ type, date, onDelete, onTaskClick }) {
   return (
      <NewTaskStyle onClick={onTaskClick}>
         <div>
            <h3>{type}</h3>
            <small className='text-danger'>{date}</small>
         </div>
         <Button
            btnClass='btn-light btn-sm'
            text=''
            icon={
               <RiDeleteBin6Fill
                  className='text-danger'
                  style={{ fontSize: '1.2rem' }}
               />
            }
            onClick={onDelete}
            style={{ userSelect: 'none', PointerEvent: 'none' }}
         />
      </NewTaskStyle>
   );
}
