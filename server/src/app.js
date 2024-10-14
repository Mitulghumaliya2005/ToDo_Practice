import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


// import Routes
import addTodoroute from "./routers/addTodo.routers.js"
import gettodorouter from "./routers/todo.routers.js"
import deletetodorouter from "./routers/deleteTodo.routers.js"
import edittodorouter from "./routers/editTodo.routers.js"



// Declare Routes
app.use("/api/v1", addTodoroute)
app.use("/api/v0", gettodorouter)
app.use("/api/v2", deletetodorouter)
app.use("/api/v3", edittodorouter)

export { app }