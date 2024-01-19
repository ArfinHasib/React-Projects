import React, { useRef, useEffect, useState } from 'react';
import Title from '../components/Title';

import ContactData from './Data.json';
import Contact from './Contact';

export default function FilterContextApp() {
   let inputSearch = useRef(null);
   useEffect(() => {
      inputSearch.current.focus();
   });

   const [searchContact, setSearchContact] = useState('');

   return (
      <div className='text-center'>
         <Title text='Filter Context App' />
         <input
            type='text'
            placeholder='Search by first name'
            className='mb-2 p-1'
            style={{ padding: '.3rem .5rem' }}
            ref={inputSearch}
            onChange={(e) => setSearchContact(e.target.value)}
         />
         <section
            className='d-flex'
            style={{
               gap: 15,
               maxWidth: 1600,
               margin: 'auto',
               flexWrap: 'wrap',
            }}
         >
            {ContactData.filter((data) => {
               if (searchContact === '') {
                  return data;
               } else if (
                  data.first_name
                     .toLocaleLowerCase()
                     .includes(searchContact.toLocaleLowerCase())
               ) {
                  return data;
               }

               return null;
            }).map((contact) => (
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
