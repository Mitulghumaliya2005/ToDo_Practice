import mongoose from "mongoose";

const TODOSchema = new mongoose.Schema({
    item: String,
    issueDate: String,
    DueDate: String,
    TekMark: Boolean,
})

export const TodoModel = mongoose.model("TodoModel",TODOSchema)