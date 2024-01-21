import React from 'react';
import NavItem from './NavItem';
import { NavStyle } from './NavStyle';

export default function ResponsiveNav() {
   return (
      <NavStyle className='navbar bg-primary text-light'>
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
      </NavStyle>
   );
}
