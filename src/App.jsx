import NewNote from "./components/NewNote.jsx";
import NoteList from "./components/NoteList";
import data from "./data.js";

function App() {
  
  return (
    <>
      <div className="container mt-5">
      <h1>Notes app</h1>
        <NewNote />
        <NoteList notes={data} />
      </div>
    </>
  );
}

export default App;
