import React, { useRef, useEffect } from 'react';
import Title from '../components/Title';

import ContactData from './Data.json';
import Contact from './Contact';

export default function FilterContextApp() {
   let inputSearch = useRef(null);
   useEffect(() => {
      inputSearch.current.focus();
   });

   return (
      <div className='text-center'>
         <Title text='Filter Context App' />
         <input
            type='text'
            placeholder='Search by first name'
            className='mb-2 p-1'
            style={{ padding: '.3rem .5rem' }}
            ref={inputSearch}
         />
         <section
            className='d-flex'
            style={{ gap: 15, maxWidth: 1600, margin: 'auto' }}
         >
            {ContactData.map((contact) => (
               <Contact
                  key={contact.id}
                  contact={contact}
                  cardColor='card-info'
                  textColor='text-dark'
               />
            ))}
         </section>
      </div>
   );
}
