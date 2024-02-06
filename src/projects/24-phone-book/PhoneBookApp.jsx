import React, { useState } from 'react';
import Title from '../components/Title';

export default function PhoneBookApp() {
   const [showContacts, setShowContacts] = useState(false);

   return (
      <>
         <Title text='Phone Book' />
         <main className='bg-dark text-light'>
            {/* Search Filter */}
            <div style={{ height: 600, overflow: 'auto' }}>
               <h2 className='subtitle text-center'>Display Contacts</h2>
               {/* {showContacts && <ContactList />} */}
            </div>
         </main>
      </>
   );
}
