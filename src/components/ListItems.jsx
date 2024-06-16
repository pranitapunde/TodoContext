import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

const ListItems = ({todo}) => {

 const {deleteTodo, editTodo} = useContext(TodoContext)
  return (
    <li className='list-group-item rounded-0'>{todo.text}
        <button className=' btn btn-sm btn-danger rounded-0 float-end mx-2' onClick={()=> deleteTodo(todo.id)} > Delete</button>
        <button className=' btn btn-sm btn-primary rounded-0 float-end' onClick={()=> editTodo(todo)}> Edit</button>

    </li>
  )
}

export default ListItems
