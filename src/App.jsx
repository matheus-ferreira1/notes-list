import { nanoid } from 'nanoid';
import { useState } from 'react'
import NotesList from './components/NotesList';
import Search from './components/Search';
import './index.css'

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first ever note!",
      date: '26/08/2022'
    },
    {
      id: nanoid(),
      text: "this is my second ever note!",
      date: '27/08/2022'
    },
    {
      id: nanoid(),
      text: "this is my third ever note!",
      date: '28/08/2022'
    },
  ])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = ( id ) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Search />
      
      <NotesList
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
