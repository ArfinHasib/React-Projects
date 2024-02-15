import React, { useState } from 'react';
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';
import Button from '../components/Button';

export default function MortgageCalcApp() {
   let alertClass;

   // States
   const [homeValue, setHomeValue] = useState('');
   const [downPayment, setDownPayment] = useState('');
   const [loanAmount, setLoanAmount] = useState('');
   const [interestAmount, setInterestAmount] = useState('');
   const [loanDuration, setLoanDuration] = useState('');
   const [monthlyPayment, setMonthlyPayment] = useState('');

   function calculateLoanAmount() {
      setLoanAmount(homeValue - downPayment);
      return loanAmount;
   }

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
                  values={homeValue}
                  onInput={(e) => setHomeValue(e.target.value)}
                  onKeyUp={calculateLoanAmount}
               />
               <FormGroup
                  labelText='Down Payment'
                  inputType='number'
                  placeholder='Enter your funds'
                  values={downPayment}
                  onInput={(e) => setDownPayment(e.target.value)}
                  onKeyUp={calculateLoanAmount}
               />
            </div>
            <FormGroup
               labelText='Loan Amount'
               inputType='number'
               placeholder='The calculated amount of the loan'
               values={loanAmount}
               readOnly={true}
            />
            <div
               className='d-grid'
               style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
            >
               <FormGroup
                  labelText='Interest Rate %'
                  inputType='number'
                  placeholder='Enter your intrest rate'
                  values={interestAmount}
               />
               <FormGroup
                  labelText='Loan Duration (years)'
                  placeholder='Enter your funds'
                  values={loanDuration}
               />
            </div>
            <Button btnClass='btn-info btn-block' text='Calculate' />
            {monthlyPayment && (
               <h4
                  className={`${(alertClass = 'alert-danger')}`}
                  style={{ width: 'auto', margin: '1rem 0' }}
               ></h4>
            )}
         </form>
      </div>
   );
}
