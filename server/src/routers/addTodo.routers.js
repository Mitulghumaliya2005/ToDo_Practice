import Router from 'express'
import { addTodo } from '../controllers/addTodo.controllers.js'

const router = Router()

router.route("/addtodo").post(addTodo)

export default router