import React, { useState } from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
   const [name, setName] = useState('Your Signature');
   const [date, setDate] = useState('Date of Birth');

   const handleNameChange = (e) => {
      setName(e.target.value);
   };
   const handleDateChange = (e) => {
      setDate(e.target.value);
   };

   const inputStyle = {
      border: 'none',
      borderBottom: '2px dotted',
      outline: 'none',
      padding: '.35rem 0',
   };
   document.body.style.background = '#eee';

   return (
      <div className='container text-center'>
         <Title classes='title' text={name} />
         <Title
            classes='main-title mb-4'
            text={date ? date : 'Date of Birth'}
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            soluta error! Labore asperiores nam rem aut ullam possimus
            quibusdam? Amet saepe commodi quia. Officiis quod quia culpa numquam
            perferendis id!
         </p>

         <footer
            className='d-flex'
            style={{
               justifyContent: 'space-around',
               position: 'relative',
               top: '40vh',
            }}
         >
            <input
               type='date'
               value={date}
               style={inputStyle}
               onChange={handleDateChange}
            />
            <input
               type='text'
               value={name}
               style={inputStyle}
               onChange={handleNameChange}
            />
         </footer>
      </div>
   );
}
