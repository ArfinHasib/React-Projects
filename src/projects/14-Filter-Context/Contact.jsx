import React from 'react';

export default function Contact({
   contact,
   width = 300,
   cardColor = 'card-danger',
   textColor,
}) {
   return (
      <div className={`card bg-light m-auto ${cardColor}`} style={{ width }}>
         <div className='card-header'>asfsaf</div>
         <div className={`card-body text-left`}>
            <h4 className='card-text'>
               <span className={`fw-bold ${textColor}`}>Last Name: </span>
               {contact.last_name}
            </h4>
            <p className='card-text'>
               <span className={`fw-bold ${textColor}`}>Email: </span>
               {contact.email}
            </p>
            <p className='card-text'>
               <span className={`fw-bold ${textColor}`}>Phone: </span>
               {contact.phone}
            </p>
            <p className='card-text'>
               <span className={`fw-bold ${textColor}`}>User Name: </span>
               {contact.user_name}
            </p>
         </div>
      </div>
   );
}