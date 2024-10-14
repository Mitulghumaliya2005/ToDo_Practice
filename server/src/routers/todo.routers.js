import { Router } from "express";
import { gettodo } from "../controllers/todo.controllers.js";

const router = Router()

router.route("/").get(gettodo)

export default router