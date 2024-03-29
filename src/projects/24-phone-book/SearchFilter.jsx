import React from 'react';
import Button from '../components/Button';

import { FaAddressBook, FaArrowsAlt } from 'react-icons/fa';

export default function SearchFilter({
   handleToggleContacts,
   handleToggleSortAz,
   handleSearchContact,
}) {
   return (
      <section className='text-center' style={{ paddingTop: '2rem' }}>
         <Button
            btnClass=''
            text=''
            icon={<FaAddressBook />}
            onClick={handleToggleContacts}
         />
         <input
            type='text'
            placeholder='Search by first Name'
            className='mb-2 mx-1'
            style={{ padding: '.3rem .5rem' }}
            onChange={(e) => handleSearchContact(e.target.value)}
         />
         <Button
            btnClass=''
            text=''
            icon={<FaArrowsAlt />}
            onClick={handleToggleSortAz}
         />
      </section>
   );
}
