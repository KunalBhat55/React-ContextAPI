import { TodoProvider } from "./context";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => 
      [{ id: Date.now(),...todo },...prev] // old + new todo
    ); 

  };
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // if id is same then update todo
    );
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.isCompleted }
          : prevTodo
      )
    ); // if id is same then toggle complete (true/false)
  };


  // Local Storage
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos")) 
  //   if (todos && todos.length > 0)  {
  //     setTodos(todos);
  //   }
    
  // }, []);
  // console.log(todos);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // },[todos]);


  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleComplete }}
    >
      <TodoForm />
      <div>
        {todos?.map((todo) => (
          <div key={todo.id} className="bg-zinc-900">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
