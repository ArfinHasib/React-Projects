import React, { useState } from 'react';
import Title from '../components/Title';
import { TableStyle } from './TableStyle';
import Task from './Task';

export default function TaskTrackerApp() {
   const [newTask, setNewTask] = useState({
      date: '',
      type: '',
      completed: '',
   });

   const handleChangeDate = (e) => {
      setNewTask({ ...newTask, date: e.target.value });
   };

   const handleChangeType = (e) => {
      setNewTask({ ...newTask, type: e.target.value });
   };

   return (
      <>
         <Title text='Tasks Tracker' />
         <TableStyle>
            <ul className='table-haed'>
               <li>Date</li>
               <li>Task</li>
            </ul>
            <Task
               date={newTask.date}
               setDate={handleChangeDate}
               type={newTask.type}
               setType={handleChangeType}
            />
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
