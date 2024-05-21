import Header from "./components/Header.jsx";
import NewNote from "./components/NewNote.jsx";
import NoteList from "./components/NoteList";
import data from "./data.js";

function App() {
  return (
    <>
      <div className="container mt-5">
        <Header />
        <NewNote />
        <NoteList notes={data} />
      </div>
    </>
  );
}

export default App;
