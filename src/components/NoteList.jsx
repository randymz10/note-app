import PropTypes from "prop-types";
import ListItem from "./ListItem";

function NoteList({ notes }) {
  return (
    <main>
      <div className="row">
        {notes.map((note) => (
          <ListItem
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </main>
  );
}

export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.array,
};
