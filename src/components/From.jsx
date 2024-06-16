import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const From = () => {
  const { saveTodo, edit , updateTodo} = useContext(TodoContext)
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit){
      updateTodo(edit.todo.id,text)
    }else{
      saveTodo(text)
    }
    setText("");
  };
  useEffect(()=> {
    setText(edit.todo.text);
     },[edit])

  return (


    <form className='my-3' onSubmit={(e) => handleSubmit(e)}>

      <input type="name" className="form-control " placeholder='Enter your Todo' onChange={(e) => setText(e.target.value)} value={text}/>
      <button className='btn btn-sm btn-success w-100 my-2'>Save</button>


    </form>



  )
}

export default From
