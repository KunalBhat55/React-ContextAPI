import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: 'Learn React',
            isCompleted: false,
        }
    ],

    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    removeTodo:(id)=>{},
    toggleComplete:(id)=>{}

});


export const useTodoContext = () => {return useContext(TodoContext)} // direct access to context sarkha useContext vaparichi garaj nahi

export const TodoProvider = TodoContext.Provider;
