import React, { useState } from 'react';
import NewNote from './NewNote';
import Button from '../components/Button';
import { v4 as uuidv4 } from 'uuid';

export default function NoteApp() {
   const [notes, setNotes] = useState([]);

   const addNewNote = (newNote) => {
      const newNotes = [...notes, newNote];
      newNotes.filter((note) => !note.id && (note.id = uuidv4()));
      setNotes(newNotes);
   };

   const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
   };

   return (
      <div className='container'>
         <Button
            btnClass='btn-success'
            text='+ New note'
            onClick={addNewNote}
         />

         <div
            className='container container-sm d-flex'
            style={{ gap: 25, flexWrap: 'wrap' }}
         >
            {notes.map((note) => (
               <NewNote key={note.id} note={note} onDelete={deleteNote} />
            ))}
         </div>
      </div>
   );
}
