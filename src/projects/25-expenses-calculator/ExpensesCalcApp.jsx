import React, { useState } from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import { BudgetStyle } from './components/styles/Budget.style';

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
               <ExpensesForm date={date} amount={amount} charge={charge} />

               <section className='card mt-2 bg-primary text-light'>
                  <div className='card-body'>
                     <BudgetStyle>
                        <h3>Budget : $</h3>
                        <input type='number' />
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
