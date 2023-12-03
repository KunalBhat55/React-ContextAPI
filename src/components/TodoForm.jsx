import { useState } from "react";
import { useTodoContext } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodoContext();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo: todo, isCompleted: false });
    setTodo("");
  };

  return (
    <div className="bg-slate-600">
      <form onSubmit={add}>
        <div className="flex mt-32 justify-center items-center">
          <input
            type="text"
            placeholder="Add Todo..."
            className="input w-full max-w-xs"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn btn-success mx-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
