import React from 'react';
import Button from '../components/Button';

document.body.style.backgroundColor = '#282c34';
document.body.style.color = '#eee';

export default function Store() {
   return (
      <div className='container p-1'>
         <h4 className='mb-2'>Change Currency:</h4>
         <Button btnClass='btn-light btn-sm' />
         <header className='text-center my-4'>
            <h1 className='title fs-xl'>Course</h1>
            <h2 className='text-uppercase mb-2'>Become a web developer</h2>
            <p className='mx-2'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Laboriosam harum ex, molestiae unde fugiat esse sit minus labore
               nesciunt omnis!
            </p>
         </header>
      </div>
   );
}
