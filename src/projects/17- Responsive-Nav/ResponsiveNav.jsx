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

   const [pageTitle, setPageTitle] = useState('');

   useEffect(() => {
      window.onresize = () => {
         let windowWidth = window.innerWidth;
         windowWidth > 600 &&
            setShowElement({ navBarNav: true, hamburgerIcon: false });
         windowWidth < 600 &&
            setShowElement({ navBarNav: false, hamburgerIcon: true });
      };
   }, []);

   const openNav = () => {
      setShowElement({
         navBarNav: true,
         hamburgerIcon: false,
         closeIcon: true,
         navOpen: true,
      });
   };

   const closeNav = () => {
      setShowElement({
         navBarNav: false,
         hamburgerIcon: true,
         closeIcon: false,
         navOpen: false,
      });
   };

   const handleActive = (e) => {
      document
         .querySelectorAll('.nav-link')
         .forEach((navLink) => navLink.classList.remove('active'));
      e.target.classList.add('active');
      setPageTitle(e.target.innerText);
   };

   return (
      <>
         <NavStyle
            className={`navbar bg-primary text-light ${
               showElement.navOpen && 'showNavbar'
            }`}
         >
            <div className='navbar-logo'>
               <a href='#' className='navbar-brand'>
                  Navbar BM
               </a>
               {/* Open and close icons */}
               {showElement.hamburgerIcon && (
                  <AiOutlineMenu onClick={openNav} />
               )}
               {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
            </div>
            <div className='navbar-collapse'>
               {showElement.navBarNav ? (
                  <ul
                     className={`navbar-items ${
                        showElement.navOpen && 'showNavbar'
                     }`}
                  >
                     <NavItem
                        text='Home'
                        active='active'
                        onClick={handleActive}
                     />
                     <NavItem text='About' onClick={handleActive} />
                     <NavItem text='Contact' onClick={handleActive} />
                  </ul>
               ) : null}
            </div>
         </NavStyle>

         <h1 className='title text-center text-primary'>
            {!pageTitle ? 'Home' : pageTitle}
         </h1>
      </>
   );
}
