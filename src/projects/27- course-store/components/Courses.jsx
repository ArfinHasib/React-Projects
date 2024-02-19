import React from 'react';
import Course from './Course';

export default function Courses() {
   return (
      <ul className='d-flex mt-2' style={{ flexWrap: 'wrap', gap: 30 }}>
         <Course />
      </ul>
   );
}
