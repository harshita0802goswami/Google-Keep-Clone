import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function expandHandler() {
    setExpanded(true);
  }
  function submitHandler(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }
  console.log(note);
  return (
    <div>
      <form>
        {isExpanded && (
          <input
            type="text"
            value={note.title}
            onChange={changeHandler}
            placeholder="Title"
            name="title"
          ></input>
        )}
        <textarea
          value={note.content}
          onClick={expandHandler}
          onChange={changeHandler}
          rows={isExpanded ? 3 : 1}
          name="content"
          placeholder="Write your note here..."
        ></textarea>
        <button onClick={submitHandler}>
          {" "}
          <AddIcon />{" "}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
