import React, { useContext } from 'react'
import ListItems from './ListItems'
import TodoContext from '../context/TodoContext'


const ListGroup = () => {

  // useContext is a React Hook that lets you read and subscribe to context from your component.
// const value = useContext(SomeContext)

  const {todos} = useContext(TodoContext)
 
  return (
    <ul className='my-3 list-group'>
      {
        todos.map(todo => <ListItems key={todo.id}  todo={todo}/>)
      }
    

    </ul>
  )
}

export default ListGroup
