import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import './cardGame.css';

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
               CardGame Ui
            </>
         )}
      </div>
   );
}
