import React, {useState} from 'react'

import style from './newtodo.module.css'

export default function NewTodo(props) {

    const [todo, setTodo] = useState({title: "", description: ""});
    const {title, description} = todo;

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [fieldName]: e.target.value}
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.onAddTodo(todo);
        setTodo({title: "", description: ""});
    }

  return (
    <form action="" onSubmit={handleSubmit} className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' value={title} onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="description">Description: </label>
            <textarea type="text" name='description' value={description} onChange={handleChange}/>
        </div>
        <div>
            <button type="submit">Add todo</button>
        </div>
    </form>
  )
}
