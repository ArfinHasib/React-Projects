import React from 'react';
import Title from '../components/Title';
import { TableStyle } from './TableStyle';

export default function TaskTrackerApp() {
   return (
      <>
         <Title text='Tasks Tracker' />
         <TableStyle>
            <ul className='table-haed'>
               <li>Date</li>
               <li>Task</li>
               {/* <Task /> */}
            </ul>
            <ul className='table-row'>
               <li className='completed'>task</li>
               <li>task</li>
               <li>task</li>
               <li>task</li>
            </ul>
         </TableStyle>
      </>
   );
}
