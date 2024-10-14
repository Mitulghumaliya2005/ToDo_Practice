import Router from "express"
import { edittodo } from "../controllers/editTodo.controllers.js"

const router = Router()

router.route("/edittodo").patch(edittodo)

export default router