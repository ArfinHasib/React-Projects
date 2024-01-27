import React, { useState, useEffect } from 'react';
import './ship.css';
import Button from '../components/Button';
import SpaceShipObj from './objects/SpaceShipObj';
import PlanetObj from './objects/PlanetObj';
import MoonObj from './objects/MoonObj';

import Ship from './svgs/space-ship-rocket-svgrepo-com.svg';
import Earth from './svgs/planet-earth-svgrepo-com.svg';
import Moon from './svgs/moon-svgrepo-com.svg';

export default function SpacePenguinApp() {
   const [shipAction, setShipAction] = useState();
   const [transformScale, setTransformScale] = useState(200);

   const [shipProps, setShipProps] = useState({
      action: '',
      scale: 200,
   });

   const startShip = () => {
      // setShipAction('fly');
      // setTransformScale(50)
      setShipProps({ action: 'fly', scale: 50 });
   };

   const landShip = () => {
      // setShipAction('land');
      // setTransformScale(200)
      setShipProps({ action: 'land', scale: 200 });
   };

   return (
      <div className='space'>
         <Button text='Launch' btnClass='btn-danger' onClick={startShip} />
         <section className='env'>
            <SpaceShipObj
               changeShip={Ship}
               scale={shipProps.scale}
               start={shipProps.action}
            />
            <MoonObj Moon={Moon} />
            <PlanetObj Planet={Earth} />
         </section>
         <Button text='Land' btnClass='btn-info' onClick={landShip} />
      </div>
   );
}
