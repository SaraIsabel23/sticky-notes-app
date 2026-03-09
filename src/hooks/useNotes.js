import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useNotes = () => {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // guardar en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {

    if (notes.length >= 10) {
      alert("Solo puedes tener 10 notas.");
      return;
    }

    const newNote = {
      id: uuidv4(),
      text,
      color
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};