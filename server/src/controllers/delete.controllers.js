import mongoose from 'mongoose'
import { TodoModel } from '../modules/todo.modules.js'

export const deletetodo = (req, res) => {
    console.log(req.body.id);
    console.log("Delete ");

    TodoModel.deleteOne({ _id: req.body.id }).then((response) => {
        console.log("Amme to delete thay gaya", response);
        TodoModel.find().then((response) => {
            console.log("Delete kariya pachhi:", response);
            res.json(response)
        })
    }).catch((error) => {
        res.json(error)
    })
}