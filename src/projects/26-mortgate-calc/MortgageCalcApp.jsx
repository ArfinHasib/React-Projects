import React from 'react';
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';

export default function MortgageCalcApp() {
   let alertClass;

   return (
      <div className='container mt-4 card' style={{ width: 500 }}>
         <Title text='Mortgage Calculator' />
         <form onSubmit={(e) => e.preventDefault()}>
            <div
               className='d-grid'
               style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
            >
               <FormGroup
                  labelText='Home Value'
                  inputType='number'
                  placeholder='Enter the value of the home'
               />
               <FormGroup
                  labelText='Down Payment'
                  inputType='number'
                  placeholder='Enter your funds'
               />
            </div>
            <FormGroup
               labelText='Loan Amount'
               inputType='number'
               placeholder='The calculated amount of the loan'
            />
            <div
               className='d-grid'
               style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
            >
               <FormGroup
                  labelText='Interest Rate %'
                  inputType='number'
                  placeholder='Enter your intrest rate'
               />
               <FormGroup
                  labelText='Loan Duration (years)'
                  placeholder='Enter your funds'
               />
            </div>
            <Button btnClass='btn-info btn-block' text='Calculate' />
            <h4
               className={`${(alertClass = 'alert-danger')}`}
               style={{ width: 'auto', margin: '1rem 0' }}
            ></h4>
         </form>
      </div>
   );
}
