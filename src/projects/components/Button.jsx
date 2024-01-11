import React from 'react';

export default function Button({ text, btnClass, icon }) {
   return (
      <button className={`btn ${btnClass}`}>
         {icon}
         {!text ? 'Click Here' : text}
      </button>
   );
}
