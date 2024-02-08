import React from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/styles/ExpensesForm';

export default function ExpensesCalcApp() {
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
               <ExpensesForm />

               <section className='card mt-2 bg-primary text-light'>
                  <div className='card-body'>
                     {/* <BudgetStyle> */}
                     <h3>Budget : $</h3>
                     <input type='number' value='' />
                     {/* </BudgetStyle> */}
                     <h3 className='mb-1'>Total Expenses: $</h3>
                     {/* Calc Economies */}
                     <h3>Economies: $</h3>
                  </div>
               </section>
            </aside>
         </section>
         <section>{/* Expenses List */}</section>
      </main>
   );
}
