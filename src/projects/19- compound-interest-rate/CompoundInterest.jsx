import React, { useEffect, useRef, useState } from 'react';
import FormGroup from '../components/FormGroup';
import CompoundInterestRateCalc from './CompoundInterestRateCalc';

export default function CompoundInterest() {
   let inputPrinciple = useRef(null);

   useEffect(() => {
      inputPrinciple.current.focus();
   }, []);

   const [compund, setCompund] = useState({
      principleAmount: '',
      monthlyContribution: null,
      interestRate: '',
      years: '',
   });

   document.body.style.background = `#14213d`;
   return (
      <div className='container'>
         <div
            className='card card-primary bg-warning shadow-md text-dark m-auto mt-4'
            style={{ maxWidth: 300 }}
         >
            <div className='card-body'>
               <FormGroup
                  labelText='Principle Amount $'
                  inputType='number'
                  values={compund.principleAmount}
                  onChange={(e) =>
                     setCompund({ ...compund, principleAmount: e.target.value })
                  }
                  reference={inputPrinciple}
               />
               <FormGroup
                  labelText='Monthly Contribution $'
                  inputType='number'
                  values={compund.monthlyContribution}
                  onChange={(e) =>
                     setCompund({
                        ...compund,
                        monthlyContribution: e.target.value,
                     })
                  }
               />
               <FormGroup
                  labelText='Interest Rate %'
                  inputType='number'
                  values={compund.interestRate}
                  onChange={(e) =>
                     setCompund({ ...compund, interestRate: e.target.value })
                  }
               />
               <FormGroup
                  labelText='Years of Investment'
                  inputType='number'
                  values={compund.years}
                  onChange={(e) =>
                     setCompund({ ...compund, years: e.target.value })
                  }
               />
            </div>
            <div className='card-footer text-right fs-lg'>
               <CompoundInterestRateCalc
                  principleAmount={compund.principleAmount}
                  monthlyContribution={compund.monthlyContribution}
                  interestRate={compund.interestRate}
                  years={compund.years}
               />
            </div>
         </div>
      </div>
   );
}
