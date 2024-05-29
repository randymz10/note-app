import { useState } from "react";
import Header from "./components/Header.jsx";
import NewNote from "./components/NewNote.jsx";
import NoteList from "./components/NoteList";
import data from "./data.js";

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [notes, setNotes] = useState(data);

  function handleShowCreateForm() {
    setShowCreateForm(!showCreateForm);
  }

  function addNote(note) {
    setNotes([...notes, note]);
    console.log(notes)
  }
  return (
    <>
      <div className="container mt-5">
        <Header>
          <button className="btn btn-primary" onClick={handleShowCreateForm}>
            Create note
          </button>
        </Header>
        {showCreateForm && <NewNote onAddNote={addNote} />}
        <NoteList notes={notes} />
      </div>
    </>
  );
}

export default App;
