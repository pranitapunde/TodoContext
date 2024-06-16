import { createContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const initialState = {
        todos: [{ id: 1, text: "i am from betul" }],
        edit: { todo: {}, isEdit: false },
    }

    const [state, dispatch] = useReducer(TodoReducer, initialState)


    // Delete
    const deleteTodo = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id,
        })

    }
    // save

    const saveTodo = (text) => {

        const newTodo = {
            id: crypto.randomUUID(),
            text: text
        }
        dispatch({
            type: "SAVE_TODO",
            payload: newTodo
        })
    }

     // Edit

    const  editTodo = (todo) => {
        dispatch({
            type : "EDIT_TODO",
            payload : todo,
        })
    }

    // update

    const updateTodo = (oldId , newText) => {
        dispatch({
            type: "UPDATE_TODO", 
            payload : {
                id: oldId,
                text: newText,
            }
        })
    }
   

    return (
        <TodoContext.Provider value={{ todos: state.todos, edit: state.edit, deleteTodo, saveTodo, editTodo ,updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;