import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./src/lib/DB.js"


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server is working on "+PORT);
    connectDB()
})