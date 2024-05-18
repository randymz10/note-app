import PropTypes from "prop-types";
import ListItem from "./ListItem";

function NoteList({ notes }) {
  return (
      <main>
        {notes.map((note) => (
          <ListItem
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </main>

  );
}

export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.array,
};
