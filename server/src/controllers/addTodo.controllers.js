import mongoose from "mongoose";
import { TodoModel } from "../modules/todo.modules.js";

const addTodo = async (req, res) => {
    // const { item, issueDate, DueDate, TekMark } = req.body;
    console.log("I am add todos", req.body);
    console.log(req.body.item);

    // const x = await TodoModel.find()

    TodoModel.create({
        item: req.body.item,
        issueDate: req.body.issueDate,
        DueDate: req.body.DueDate,
        TekMark: req.body.TekMark,
    }).then((response) => {
        console.log("created response is ", response);
        TodoModel.find().then((respon) => {
            console.log("Hello kem chho", respon);
            res.json(respon)
        })
    }).catch((error) => {
        res.json(error)
    })
}

export { addTodo }