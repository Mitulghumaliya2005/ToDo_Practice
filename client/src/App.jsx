import { useEffect, useState } from 'react'
import { CreateArea } from './componets/CreateArea.jsx'
import ShowTodo from './componets/ShowTodo.jsx'
import { useContext } from 'react'
import { editvaducontext } from './context/index.jsx'
import axios from 'axios'

function App() {

  const contextstate = useContext(editvaducontext)

  const [Todos, setTodos] = useState([])
  const API_URL = 'http://localhost:5000/api';

  useEffect(() => {
    async function getdata() {
      try {
        const response = await axios.get(`${API_URL}/v0/`)
        setTodos(response.data)
        return response.data
      } catch (error) {
        throw new Error
      }
    }
    getdata().then((response) => {
      setTodos(response)
    }).catch((error) => {
      throw new error
    })
  }, [])

  return (
    <>
      <h1>Welcom To TodoList</h1>
      <CreateArea setTodos={setTodos} Todos={Todos} />
      {
        Todos.map((todo, id) => {
          return (
            <ShowTodo todo={todo} key={id} setTodos={setTodos} />
          )
        })
      }
    </>
  )

}

export default App
