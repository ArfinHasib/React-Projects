import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { NavStyle } from './NavStyle';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function ResponsiveNav() {
   const [showElement, setShowElement] = useState({
      navBarNav: true,
      hamburgerIcon: false,
      closeIcon: false,
      navOpen: false,
   });

   useEffect(() => {
      window.onresize = () => {
         let windowWidth = window.innerWidth;
         windowWidth > 600 &&
            setShowElement({ navBarNav: true, hamburgerIcon: false });
         windowWidth < 600 &&
            setShowElement({ navBarNav: false, hamburgerIcon: true });
      };
   });

   return (
      <NavStyle className='navbar bg-primary text-light'>
         <div className='navbar-logo'>
            <a href='#' className='navbar-brand'>
               Navbar BM
            </a>
            {/* Open and close icons */}
            {showElement.hamburgerIcon && <AiOutlineMenu />}
            {showElement.closeIcon && <AiOutlineClose />}
         </div>
         <div className='navbar-collapse'>
            {showElement.navBarNav ? (
               <ul className='navbar-items'>
                  <NavItem text='Home' active='active' />
                  <NavItem text='About' />
                  <NavItem text='Contact' />
               </ul>
            ) : null}
         </div>
      </NavStyle>
   );
}
