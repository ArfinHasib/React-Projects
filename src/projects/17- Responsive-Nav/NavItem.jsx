import React from 'react';

export default function NavItem({ active, text, onClick }) {
   return (
      <li className='nav-item'>
         <a href='#' className={`nav-link ${active}`} onClick={onClick}>
            {text}
         </a>
      </li>
   );
}
