import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import './cardGame.css';
import Card from './Card';

// import units
import SpearManImg from './svg/spear-man.svg';
import WarHoursMan from './svg/warhorse-svgrepo-com.svg';
import Archer from './svg/archer.svg';

export default function CardGameUi() {
   const [start, setStart] = useState(false);

   const startGame = () => {
      setStart(true);
   };

   document.body.style.background = '#170536';
   document.body.style.color = '#bab6bf';

   return (
      <div className='container text-center'>
         {!start ? (
            <section className='text-center'>
               <Title text='Card Game' />
               <Button
                  text='Start'
                  btnClass='btn-success btn-lg'
                  onClick={startGame}
               />

               <Title classes='subtitle' text='Rules:' />
               <ul className='fx-lg d-flex flex-column' style={{ gap: 15 }}>
                  <li>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Incidunt magni quo eveniet laboriosam sed accusantium
                     beatae, blanditiis architecto perspiciatis laudantium!
                  </li>
                  <li>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Incidunt magni quo eveniet laboriosam sed accusantium
                     beatae, blanditiis architecto perspiciatis laudantium!
                  </li>
                  <li>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Incidunt magni quo eveniet laboriosam sed accusantium
                     beatae, blanditiis architecto perspiciatis laudantium!
                  </li>
                  <li>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Incidunt magni quo eveniet laboriosam sed accusantium
                     beatae, blanditiis architecto perspiciatis laudantium!
                  </li>
               </ul>
            </section>
         ) : (
            <>
               <Title text='0-1' />
               <main className='container m-auto game-board'>
                  <section className='player_1'>
                     <Card
                        player={'player_1'}
                        unitTypeName='Sword Cavalry'
                        unitTypeImg={WarHoursMan}
                     />
                     <Card
                        player={'player_1'}
                        unitTypeName='Spear man'
                        unitTypeImg={SpearManImg}
                     />
                     <Card
                        player={'player_1'}
                        unitTypeName='Sword Cavalry'
                        unitTypeImg={Archer}
                     />
                     <Card
                        player={'player_1'}
                        unitTypeName='Spear man'
                        unitTypeImg={SpearManImg}
                     />
                  </section>
                  <section
                     className='fog-of-warplayer_1'
                     unitTypeName='Sword Cavalry'
                     unitTypeImg={WarHoursMan}
                  ></section>
                  <section className='player_2'>
                     <Card
                        player={'player_2'}
                        unitTypeName='Sword Cavalry'
                        unitTypeImg={WarHoursMan}
                     />
                     <Card
                        player={'player_2'}
                        unitTypeName='Spear man'
                        unitTypeImg={SpearManImg}
                     />
                     <Card
                        player={'player_2'}
                        unitTypeName='Sword Cavalry'
                        unitTypeImg={WarHoursMan}
                     />
                     <Card
                        player={'player_2'}
                        unitTypeName='Spear man'
                        unitTypeImg={Archer}
                     />
                  </section>
               </main>
            </>
         )}
      </div>
   );
}
