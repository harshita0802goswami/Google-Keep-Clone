import React, { useState } from "react";
import Header from "./components/Header";
import Count from "./components/Count";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./index.css";
function App(props) {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }
  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "EMPTY"
            : `Showing ${notes.length} Notes in database`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
