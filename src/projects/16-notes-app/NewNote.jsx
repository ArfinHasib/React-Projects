import React from 'react';
import { DeleteIcon, Icons, NoteStyle } from './NoteStyle';
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';

export default function NewNote() {
   return (
      <NoteStyle className='card'>
         <div className='card-header text-right'>
            <Icons>
               <MdOutlineNoteAlt />
               <DeleteIcon>
                  <MdDeleteForever />
               </DeleteIcon>
            </Icons>
         </div>

         <div className='card-body'>
            <textarea style={{ border: 'none', outline: 'none' }}></textarea>
         </div>
      </NoteStyle>
   );
}
