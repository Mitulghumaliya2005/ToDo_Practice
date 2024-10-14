import axios from 'axios'
import React, { useState } from 'react'

export function CreateArea({ setTodos, Todos }) {


    const API_URL = 'http://localhost:5000/api';


    const [todo, setTodo] = useState({
        item: "",
        issueDate: "",
        DueDate: "",
        TekMark: false,
    })

    function onangehandle(Event) {
        setTodo((curr) => {
            return (
                { ...curr, [Event.target.name]: Event.target.value }
            )
        })

    }

    function submittodohandler(Event) {
        Event.preventDefault();
        async function Addtodo() {
            try {
                console.log("writed todo is", todo);
                const response = await axios.post(`${API_URL}/v1/addtodo`, todo)
                // console.log(response);
                return response
            } catch (error) {
                throw new error
            }
        }

        Addtodo().then((response) => {
            // console.log(response.data);
            setTodos(response.data)
        }).catch((error) => {
            console.log(error);
        })

        setTodo({
            item: "",
            issueDate: "",
            DueDate: "",
            TekMark: false,
        })
    }

    return (
        <div>
            <h2>HElloo</h2>
            <form>
                <label htmlFor='item'>Add To Todo:</label>
                <input
                    id='item'
                    value={todo.item}
                    placeholder='Todo'
                    onChange={onangehandle}
                    name='item'
                /> <br />
                <span>issueDate: </span>
                <input
                    id='issueDate'
                    value={todo.issueDate}
                    placeholder='issueDate'
                    onChange={onangehandle}
                    name='issueDate'
                /> <br />
                <span>DueDate: </span>
                <input
                    id='DueDate'
                    value={todo.DueDate}
                    placeholder='DueDate'
                    onChange={onangehandle}
                    name='DueDate'
                /><br /> <br />
                <button onClick={submittodohandler}>Add Todo📒</button>
            </form>
        </div>
    )
}
