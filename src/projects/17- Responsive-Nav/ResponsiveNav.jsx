import React from 'react';

export default function ResponsiveNav() {
   return (
      <nav>
         <div className='navbar-logo'>
            <a href='#' className='navbar-brand'>
               Navbar BM
            </a>
            {/* Open and close icons */}
         </div>
         <div className='navbar-collapse'>
            <ul className='navbar-items'>
               <li className='nav-item'>
                  <a href='#' className='nav-link'>
                     Home
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
}
