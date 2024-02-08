import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import { BudgetStyle } from './components/styles/Budget.style';

const initialExpenses = localStorage.getItem('expenses')
   ? JSON.parse(localStorage.getItem('expenses'))
   : [];

export default function ExpensesCalcApp() {
   // All expenses
   const [expenses, setExpenses] = useState('');
   // Single expense
   const [date, setDate] = useState('');
   // Single Amount
   const [amount, setAmount] = useState('');
   // Single charge
   const [charge, setCharge] = useState('');
   // Budget
   const [budget, setBudget] = useState('');

   const changeBudget = (e) => {
      setBudget(e.target.value);
   };

   const handleCharge = (e) => {
      setCharge(e.target.value);
   };

   const handleDate = (e) => {
      setDate(e.target.value);
   };

   const handleAmount = (e) => {
      setAmount(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      let temp = expenses.localeCompare((item) => {
         return item;
      });

      setExpenses(temp);
   };

   let inputBudget = useRef(null);
   useEffect(() => {
      inputBudget.current.focus();
      localStorage.setItem('expenses', JSON.stringify(expenses));
   }, [expenses]);

   return (
      <main className='container'>
         <Title text='Expenses Calculator' />
         {/* Alert Component */}

         <section
            style={{
               display: 'grid',
               gridTemplateColumns: 'repeat(2, 1fr)',
               gap: '25px',
               margin: '1rem',
            }}
         >
            <aside>
               {/* ExpensesForm */}
               <ExpensesForm
                  date={date}
                  amount={amount}
                  charge={charge}
                  handleDate={handleDate}
                  handleCharge={handleCharge}
                  handleAmount={handleAmount}
                  handleSubmit={handleSubmit}
               />

               <section className='card mt-2 bg-primary text-light'>
                  <div className='card-body'>
                     <BudgetStyle>
                        <h3>Budget : $</h3>
                        <input
                           type='number'
                           value={budget}
                           onChange={changeBudget}
                           ref={inputBudget}
                        />
                     </BudgetStyle>
                     <h3 className='mb-1'>Total Expenses: $</h3>
                     {/* Calc Economies */}
                     <h3>Economies: $</h3>
                  </div>
               </section>
            </aside>
         </section>
         <section>
            <ExpensesList />
         </section>
      </main>
   );
}
