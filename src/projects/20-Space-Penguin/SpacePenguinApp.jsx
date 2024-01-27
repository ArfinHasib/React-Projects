import React from 'react';
import './ship.css';
import Button from '../components/Button';

export default function SpacePenguinApp() {
   return (
      <div className='space'>
         <Button text='Launch' btnClass='btn-danger' onClick={''} />
         <section className='env'>
            {/* <SpaceShip /> */}
            {/* <MoonObj /> */}
            {/* <PlanetObj /> */}
         </section>
         <Button text='Land' btnClass='btn-info' onClick={''} />
      </div>
   );
}
