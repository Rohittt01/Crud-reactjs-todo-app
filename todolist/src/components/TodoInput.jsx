import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, setAddTodos, addTodos} = props

  return (
    <header>
        <input value={addTodos} onChange={(e) =>{
          setAddTodos(e.target.value)
        }} placeholder='Add text...' />
        <button onClick={() => {handleAddTodos(addTodos)
           setAddTodos('')}}>Add</button>
    </header>
  )
}
