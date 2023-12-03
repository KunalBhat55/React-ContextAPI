import { useEffect, useState } from "react";

function Note() {
  const [note, setNote] = useState(""); // for input field
  const [notes, setNotes] = useState([""]); // for notes list

  const [hide, setHide] = useState(true); // for hide input field

  const addNote = () => {
    setNotes((prev) => [{ id: Date.now(), text: note }, ...prev]); // add new note to the top
    setNote("");
  };

  const removeNote = () => {
    localStorage.removeItem("notes");
  };

  // notes for local storage
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes && notes.length > 0 && notes.text != "") {
      setNote(notes);
    }
  }, []);

  useEffect(() => {
    // save only if there are notes
    if (notes.text) {
      localStorage.setItem("notes", JSON.stringify(notes)); // notes for local storage
    }
  }, [notes]); // update when notes change

  return (
    <div className="bg-slate-600">
      <h1 className="text-center text-4xl font-bold text-white">Todo App</h1>
      <div className="flex  justify-center mt-10">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="btn btn-circle btn-success text-lg ml-2"
          onClick={() => {
            addNote();
            setHide(false);
          }}
        >
          <p className="mb-1">+</p>
        </button>
      </div>

      <div className="p-3 mr-14 flex flex-col items-center">
        {notes.map((note) => (
          <div key={note.id} className="bg-green-300">
            <ul key={note.id}>
              <li key={note.id}>
                <input
                  className={`${hide ? "hidden" : ""} p-1 m-1`}
                  readOnly={true}
                  type="text"
                  value={note.text}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div></div>
      <button
        className="btn btn-circle text-xl btn-success"
        onClick={removeNote}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default Note;
