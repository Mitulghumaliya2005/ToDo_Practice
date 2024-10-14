import mongoose from "mongoose";
import { TodoModel } from "../modules/todo.modules.js";

const gettodo = (req, res) => {
    console.log("Calles");

    TodoModel.find().then((response) => {
        res.json(response)
    }).catch((Error) => {
        res.json(Error)
    })
}

export { gettodo }