import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import { BudgetStyle } from './components/styles/Budget.style';
import { v4 as uuidV4 } from 'uuid';

const initialExpense = localStorage.getItem('expenses')
   ? JSON.parse(localStorage.getItem('expenses'))
   : [];

export default function ExpensesCalcApp() {
   // All expenses
   const [expenses, setExpenses] = useState(initialExpense);
   // Single expense
   const [date, setDate] = useState('');
   // Single Amount
   const [amount, setAmount] = useState('');
   // Single charge
   const [charge, setCharge] = useState('');
   // Budget
   const [budget, setBudget] = useState('');

   // ids
   const [id, setId] = useState(0);
   // Edit?
   const [edit, setEdit] = useState(false);

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

      if (date !== '' && charge !== '' && amount > 0) {
         if (edit) {
            let tempExpense = expenses.map((item) => {
               return item.id === id ? { ...item, date, charge, amount } : item;
            });
            setExpenses(tempExpense);
            setEdit(false);
            // todo: Alert
         } else {
            const singleExpense = { id: uuidV4(), date, charge, amount };
            setExpenses([...expenses, singleExpense]);
            // todo: Alert
         }
         setCharge('');
         setAmount('');
      } else {
         // todo: alert
      }
   };

   let inputBudget = useRef(null);
   useEffect(() => {
      inputBudget.current.value === '' && inputBudget.current.focus();
      inputBudget.current.focus();
      localStorage.setItem('expenses', JSON.stringify(expenses));
   }, [expenses]);

   // Handle Clear all Expense
   const clearExpenses = () => {
      setExpenses([]);
      // Alert
   };

   // Handle delete single expense
   const handleDelete = (id) => {
      if (window.confirm('Delete Expense?')) {
         let filterdExpenses = expenses.filter((expense) => expense.id !== id);
         setExpenses(filterdExpenses);
         // todo: alert
      }
   };

   // Handle Edit single expense
   const handleEdit = (id) => {
      let editedExpenses = expenses.find((expense) => expense.id === id);
      let { charge, amount } = editedExpenses;
      setCharge(charge);
      setAmount(amount);
      setId(id);
      setEdit(true);
   };

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
                  edit={edit}
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
                     <h3 className='mb-1'>
                        Total Expenses: ${' '}
                        {expenses.reduce((total, expense) => {
                           return (total += parseInt(expense.amount, 10));
                        }, 0)}
                     </h3>
                     {/* Calc Economies */}
                     <h3>Economies: $ {calcEconomies(budget, expenses)}</h3>
                  </div>
               </section>
            </aside>
            <section>
               <ExpensesList
                  expenses={expenses}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleClearAllExpenses={clearExpenses}
               />
            </section>
         </section>
      </main>
   );
}

function calcEconomies(budget, expenses) {
   return (
      budget -
      expenses.reduce((total, expense) => {
         return (total += parseInt(expense.amount, 10));
      }, 0)
   );
}
