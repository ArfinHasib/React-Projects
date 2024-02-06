import React, { useState } from 'react';
import Title from '../components/Title';
import ContactList from './ContactList';

import { getContacts } from './db';
import SearchFilter from './SearchFilter';

export default function PhoneBookApp() {
   let dbContacts = getContacts();
   const [showContacts, setShowContacts] = useState(false);
   const [sortAZ, setSortAZ] = useState(true);

   const toggleContacts = () => {
      showContacts ? setShowContacts(false) : setShowContacts(true);
   };

   const toggleSortAZ = () => {
      sortAZ ? setSortAZ(false) : setSortAZ(true);
   };

   return (
      <>
         <Title text='Phone Book' />
         <main className='bg-dark text-light'>
            <SearchFilter
               handleToggleContacts={toggleContacts}
               handleToggleSortAz={toggleSortAZ}
            />
            <div
               style={{ height: 600, overflow: 'auto' }}
               className='container'
            >
               <h2 className='subtitle text-center'>Display Contacts</h2>
               {showContacts && (
                  <ContactList
                     contacts={
                        sortAZ
                           ? dbContacts.sort((a, b) =>
                                a.first_name.localeCompare(b.first_name)
                             )
                           : dbContacts.sort((a, b) =>
                                b.first_name.localeCompare(a.first_name)
                             )
                     }
                  />
               )}
            </div>
         </main>
      </>
   );
}
