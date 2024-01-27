import React from 'react';
import './ship.css';
import Button from '../components/Button';
import SpaceShipObj from './objects/SpaceShipObj';
import PlanetObj from './objects/PlanetObj';
import MoonObj from './objects/MoonObj';

import Ship from './svgs/space-ship-rocket-svgrepo-com.svg';
import Earth from './svgs/planet-earth-svgrepo-com.svg';
import Moon from './svgs/moon-svgrepo-com.svg';

export default function SpacePenguinApp() {
   return (
      <div className='space'>
         <Button text='Launch' btnClass='btn-danger' onClick={''} />
         <section className='env'>
            <SpaceShipObj changeShip={Ship} scale={200} />
            <MoonObj Moon={Moon} />
            <PlanetObj Planet={Earth} />
         </section>
         <Button text='Land' btnClass='btn-info' onClick={''} />
      </div>
   );
}
