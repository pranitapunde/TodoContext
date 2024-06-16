import React from 'react'
import Navbar from './components/Navbar'
import From from './components/From'
import ListGroup from './components/ListGroup' 
import {TodoProvider} from './context/TodoContext'
const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className='container p-5'>
        <From />
        <ListGroup />

      </div>

    </ TodoProvider>
  )
}

export default App
