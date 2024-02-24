import React, { useState } from 'react';

export default function SynthesizerApp() {
   const [text, SetText] = useState('');

   return (
      <div className='container d-flex flex-column'>
         {/* <SppechNarator /> */}
         <textarea
            id=''
            cols='30'
            rows='10'
            value={text}
            onChange={(e) => SetText(e.target.value)}
         ></textarea>
      </div>
   );
}
