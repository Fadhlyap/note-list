import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleUpdate(){
    props.onUpdate(props.id)
  }




  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Note;
