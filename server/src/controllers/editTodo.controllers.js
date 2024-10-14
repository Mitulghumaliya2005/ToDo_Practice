import mongoose from "mongoose";
import { TodoModel } from "../modules/todo.modules.js";

export const edittodo = (req, res) => {
    const { item, issueDate, DueDate, TekMark } = req.body

    console.log("Eidt called");

    TodoModel.findByIdAndUpdate({ _id: req.body._id }, {
        item: item,
        issueDate: issueDate,
        DueDate: DueDate,
        TekMark: TekMark,
    }).then((response) => {
        console.log(response);
        TodoModel.find().then((response) => {
            res.json(response)
        }).catch((error) => {
            console.log(error);
        })
    })
}