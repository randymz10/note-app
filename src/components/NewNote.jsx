import { useState } from "react";

function NewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(3);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const note = {
      id: count,
      title: e.target.title.value,
      description: e.target.description.value,
    };
    onAddNote(note);
    setCount(count + 1);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-labl">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />
      </div>

      <button className="btn btn-success">Create</button>
    </form>
  );
}

export default NewNote;
