import { useState } from "react";

function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
  <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-labl">Title</label>
    <input type="text" className="form-control" name="title" id="title" value={title} onChange={handleTitle}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control" name="description" id="description" value={description} onChange={handleDescription}/>
  </div>

    <button className="btn btn-success">Create</button>
  </form>
  );
}

export default NewNote;
