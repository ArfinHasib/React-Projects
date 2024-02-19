import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { CurrencyContext } from '../context/currencies-context';

export default function Course({ course }) {
   const { title, img, price } = course;

   const currency = React.useContext(CurrencyContext);

   const contextPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
   }).format(price * currency.conversionRate);

   const [courseBg, setCourseBg] = useState();

   useEffect(() => {
      if (currency.code === 'USD') setCourseBg('card-light');
      if (currency.code === 'EUR') setCourseBg('card-primary');
      if (currency.code === 'GBP') setCourseBg('card-accept');
   }, [currency.code]);

   return (
      <li className={`card ${courseBg} mb-2`} style={{ width: 250 }}>
         <div className='card-header'>{title}</div>
         <img src={img} alt='course img' style={{ height: '100%' }} />
         <p className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            fugit praesentium rerum rem veniam itaque obcaecati eum nulla?
            Dignissimos, nemo!
         </p>
         <div className='card-footer d-flex space-between'>
            <h4>{contextPrice}</h4>
            <Button btnClass='btn-success' text='BUY' />
         </div>
      </li>
   );
}
