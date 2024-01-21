import React, { useEffect, useState } from 'react';
import { DeleteIcon, Icons, NoteStyle } from './NoteStyle';
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';

export default function NewNote({ note, onDelete, text, cardBg }) {
   const [newCardBg, setNewCardBg] = useState();

   useEffect(() => {
      !newCardBg && setNewCardBg(cardBg);
   }, [newCardBg]);

   return (
      <NoteStyle className={`card ${newCardBg}`}>
         <div className='card-header text-right'>
            <Icons>
               <MdOutlineNoteAlt />
               <DeleteIcon>
                  <MdDeleteForever onClick={() => onDelete(note.id)} />
               </DeleteIcon>
            </Icons>
         </div>

         <div className='card-body'>
            <textarea style={{ border: 'none', outline: 'none' }}>
               {text}
            </textarea>
         </div>
      </NoteStyle>
   );
}
