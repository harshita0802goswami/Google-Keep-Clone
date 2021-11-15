import React from "react";
import { DeleteOutlined } from "@material-ui/icons";
import { Button } from "@mui/material";
function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Button onClick={() => onDelete(id)}>
        {" "}
        <DeleteOutlined />{" "}
      </Button>
    </div>
  );
}

export default Note;
