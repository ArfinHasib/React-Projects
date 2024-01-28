import React, { useState } from 'react';
import Title from '../components/Title';
import { TableStyle } from './TableStyle';
import Task from './Task';
import NewTask from './NewTask';

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

   let tasks = [
      {
         date: '',
         type: '',
      },
   ];

   const [taskList, setTaskList] = useState(tasks);

   const addNewTask = () => {
      setTaskList([...taskList, { date: newTask.date, type: newTask.type }]);
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
               onClick={addNewTask}
            />
            <ul className='table-row'>
               {taskList.map((task, index) =>
                  task.date !== '' && task.type !== '' ? (
                     <NewTask key={index} date={task.date} type={task.type} />
                  ) : null
               )}
            </ul>
         </TableStyle>
      </>
   );
}
