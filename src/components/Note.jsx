import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
