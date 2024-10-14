import "dotenv/config"
import { dbConnect } from "./db/index.js"
import { app } from "./app.js"

dbConnect().then((response) => {
    console.log(response);
    app.listen(process.env.PORT, () => {
        console.log(`Applications Listen On Port ${process.env.PORT}`);
    })
}).catch((Error) => {
    console.log(Error);
})