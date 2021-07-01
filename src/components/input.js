import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './input.css'

import { saveTodo } from '../redux/todoSlice'

const Input = () => {
  const dispatch = useDispatch()


  const [input, setInput] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    dispatch(saveTodo({
      name: input,
      done: false,
      id: Date.now()
    }))
    setInput('')
  }
  return (
    <div className='input'>
      <input onChange={e => setInput(e.target.value)} value={input}/>
      <button onClick={addTodo}>Add!</button>
    </div>
  )
}

export default Input
