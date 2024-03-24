import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const charlimit = 200;

  const handlechange = (event) => {
    if (charlimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note ..."
        value={noteText}
        onChange={handlechange}
      ></textarea>
      <div className="note-footer">
        <small>{charlimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnote;
