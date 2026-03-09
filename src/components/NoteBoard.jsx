import { useState, useContext } from "react";
import { useNotes } from "../hooks/useNotes";
import { ColorContext } from "../context/ColorContext";
import Note from "./Note";
import styles from "./NoteBoard.module.css";

const NoteBoard = () => {
  const { notes, addNote, deleteNote } = useNotes();
  const { color } = useContext(ColorContext);

  const [text, setText] = useState("");

  const handleAddNote = () => {
    if (text.trim() === "") {
      alert("La nota no puede estar vacía");
      return;
    }

    addNote(text, color);
    setText("");
  };

  return (
    <div className={styles.board}>
      
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleAddNote}>
          Añadir
        </button>
      </div>

      <div className={styles.notesContainer}>

        {notes.length === 0 ? (
          <p>No hay notas todavía</p>
        ) : (
           notes.map((note) => (
             <Note
               key={note.id}
               note={note}
               deleteNote={deleteNote}
             />
           ))
        )}
      </div>

    </div>
  );
};

export default NoteBoard;
