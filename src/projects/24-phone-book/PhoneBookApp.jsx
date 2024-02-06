import React, { useState } from 'react';
import Title from '../components/Title';
import ContactList from './ContactList';

export default function PhoneBookApp() {
   const [showContacts, setShowContacts] = useState(true);

   return (
      <>
         <Title text='Phone Book' />
         <main className='bg-dark text-light'>
            {/* Search Filter */}
            <div
               style={{ height: 600, overflow: 'auto' }}
               className='container'
            >
               <h2 className='subtitle text-center'>Display Contacts</h2>
               {showContacts && <ContactList />}
            </div>
         </main>
      </>
   );
}
