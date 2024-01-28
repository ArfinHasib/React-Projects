import React from 'react';
import Title from '../components/Title';

export default function TaskTrackerApp() {
   return (
      <>
         <Title text='Tasks Tracker' />
         <TableStyle>
            <ul className='table-haed'>
               <li>Date</li>
               <li>Task</li>
               {/* <Task /> */}
               <ul className='table-row'>task</ul>
            </ul>
         </TableStyle>
      </>
   );
}
