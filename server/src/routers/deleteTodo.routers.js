import Router from "express"
import { deletetodo } from "../controllers/delete.controllers.js"

const router = Router()

router.route("/deletetodo").patch(deletetodo)

export default router 