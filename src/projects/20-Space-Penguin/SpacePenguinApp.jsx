import React, { useState, useEffect } from 'react';
import './ship.css';
import Button from '../components/Button';
import SpaceShipObj from './objects/SpaceShipObj';
import PlanetObj from './objects/PlanetObj';
import MoonObj from './objects/MoonObj';

import Ship from './svgs/space-ship-rocket-svgrepo-com.svg';
import Earth from './svgs/planet-earth-svgrepo-com.svg';
import Moon from './svgs/moon-svgrepo-com.svg';
import Penguin from './svgs/penguin-svgrepo-com.svg';

export default function SpacePenguinApp() {
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

   const [shipType, setShipType] = useState(Ship);
   useEffect(() => {
      if (shipProps.action === 'land') {
         setShipType(Penguin);
         setTimeout(() => {
            setShipType(Ship);
         }, 5500);
      } else {
         setShipType(Ship);
      }
   }, [shipProps.action]);

   return (
      <div className='space'>
         <Button text='Launch' btnClass='btn-danger' onClick={startShip} />
         <section className='env'>
            <SpaceShipObj
               changeShip={shipType}
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
