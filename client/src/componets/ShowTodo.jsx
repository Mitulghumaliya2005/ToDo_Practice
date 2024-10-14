import React from 'react'
import { useContext, useState } from 'react';
import { editvaducontext } from "../context/index.jsx"

export default function ShowTodo({ todo, setTodos }) {

  const [toggle, setToggle] = useState(false)
  const [updateTODO, setUpdateTODO] = useState(todo)
  const contextstate = useContext(editvaducontext)

  const edittogglehadler = () => {
    setToggle(!toggle)
  }

  const onChangeHandler = (Event) => {
    setUpdateTODO((c) => {
      return (
        { ...c, [Event.target.name]: Event.target.value }
      )
    })
  }

  const submitEditer = (Event) => {
    Event.preventDefault();
    setToggle(!toggle)
    console.log(updateTODO);
    contextstate.edittodo(updateTODO)
  }

  if (contextstate.toDOs) {
    console.log(contextstate.toDOs);
    setTodos(contextstate.toDOs)
  }

  return (
    <div>
      <hr />
      <h6>{todo.item}</h6>
      <h6>{todo.issueDate}</h6>
      <h6>{todo.DueDate}</h6>
      <h6>{todo.TekMark}</h6>
      <button onClick={() => contextstate.deletetodo(todo._id)}>Delete Todo</button>
      {
        !toggle &&
        <button onClick={edittogglehadler}>Edit Blog</button>
      }
      {
        toggle &&
        <div>
          <form>
            <label htmlFor="item" >Title:</label>
            <input
              type="text"
              name="item"
              value={updateTODO.item}
              id="item"
              onChange={onChangeHandler}
            />
            <br />
            <label htmlFor="issueDate">issueDate:</label>
            <input
              type="text"
              name="issueDate"
              value={updateTODO.issueDate}
              id="issueDate"
              onChange={onChangeHandler}
            />
            <br />
            <label htmlFor="DueDate">DueDate:</label>
            <input
              type="text"
              name="DueDate"
              value={updateTODO.DueDate}
              id="DueDate"
              onChange={onChangeHandler}
            />
            <br />
            <button onClick={submitEditer}>Edited Blog</button>
          </form>
        </div>
      }
    </div>
  )
}
