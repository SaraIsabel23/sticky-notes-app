import styles from "./Note.module.css";

const Note = ({ note, deleteNote }) => {
  return (
    <div
      className={styles.note}
      style={{ backgroundColor: note.color }}
    >
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default Note;