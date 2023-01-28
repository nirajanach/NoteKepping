import React, { useState } from "react";
import Headers from "./Header";
import Footers from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });

    console.log(notes);
  }

  function deleteNote(id) {
    
    setNotes(prevNote => {
      return prevNote.filter((item,index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Headers />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            heading={item.title}
            text={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footers />
    </div>
  );
}

export default App;
