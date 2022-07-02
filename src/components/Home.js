import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid'

import NewTodo from './NewTodo'
import Todos from './Todos'
import style from './home.module.css'

export default function Home() {

    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), newTodo}]
        })
    }

    const handleRemoveTodo = (id) => {
       setTodos((prevTodos) => {
        const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
        return filteredTodos
       });
    }

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleNewTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}
