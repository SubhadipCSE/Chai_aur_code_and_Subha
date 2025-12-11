// require (`dotenv`).config({path: './env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";

// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`The server is running on port : ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log("MongoDB connection Faild", error);
})

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log("MongoDB Connected !!!!")
//     app.on("error", () => {
//         console.log("Error :", error);
//         throw error
//     })
//     app.listen(process.env.PORT, () => {
//         console.log(`The app is running on Port : ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("Error :", error);
//     throw error
//   }
// })()

