import React from 'react';
import NavItem from './NavItem';

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
               <NavItem text='Home' active='active' />
               <NavItem text='About' />
               <NavItem text='Contact' />
            </ul>
         </div>
      </nav>
   );
}
