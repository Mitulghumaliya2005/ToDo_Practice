import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        const response = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
        console.log("DBConnected SuccessFully");
    } catch (error) {
        throw new error
    }
}

export {dbConnect}