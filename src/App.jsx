import { nanoid } from 'nanoid';
import { useState } from 'react'
import NotesList from './components/NotesList';
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

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App
