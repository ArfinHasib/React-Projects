import React from 'react';
import Title from '../components/Title';

export default function RandomizeColor() {
   const handleClick = (e) => {
      console.log(getRandomColor());
      let body = document.querySelector('body');
      let btn = e.target;
      body.style.backgroundColor = getRandomColor();
      // btn.style.backgroundColor = getRandomColor();
   };

   const getRandomColor = () => {
      let letters = '0123456789ABCDEF';
      let color = '#';

      for (let i = 0; i < 6; i++) {
         color = color + letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };

   return (
      <div className='container m-auto text-center'>
         <Title text='Randomize Color' classes='mb-4' />
         <button className='btn btn-danger' onClick={(e) => handleClick(e)}>
            Click Here
         </button>
         <button className='btn btn-success' onClick={(e) => handleClick(e)}>
            Click Here
         </button>
         <button className='btn btn-primary' onClick={(e) => handleClick(e)}>
            Click Here
         </button>
         <button className='btn btn-warning' onClick={(e) => handleClick(e)}>
            Click Here
         </button>
      </div>
   );
}
