import React, { useState } from 'react';
import Title from '../components/Title';
import ContactList from './ContactList';

import { getContacts } from './db';
import SearchFilter from './SearchFilter';

export default function PhoneBookApp() {
   let dbContacts = getContacts();
   const [showContacts, setShowContacts] = useState(false);

   const toggleContacts = () => {
      showContacts ? setShowContacts(false) : setShowContacts(true);
   };

   return (
      <>
         <Title text='Phone Book' />
         <main className='bg-dark text-light'>
            <SearchFilter handleToggleContacts={toggleContacts} />
            <div
               style={{ height: 600, overflow: 'auto' }}
               className='container'
            >
               <h2 className='subtitle text-center'>Display Contacts</h2>
               {showContacts && (
                  <ContactList
                     contacts={dbContacts.map((contact) => {
                        return contact;
                     })}
                  />
               )}
            </div>
         </main>
      </>
   );
}
