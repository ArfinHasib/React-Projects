import React from 'react';
import Button from '../../components/Button';

export default function Course({ course }) {
   const { title, img, price } = course;

   return (
      <li className='card mb-2' style={{ width: 250 }}>
         <div className='card-header'>{title}</div>
         <img src={img} alt='course img' style={{ height: '100%' }} />
         <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            fugit praesentium rerum rem veniam itaque obcaecati eum nulla?
            Dignissimos, nemo!
         </p>
         <div className='card-footer d-flex space-between'>
            <h4>{price}</h4>
            <Button btnClass='btn-success' text='BUY' />
         </div>
      </li>
   );
}
