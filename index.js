import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./src/lib/DB.js"
import router from "./src/routes/auth.routes.js"
app.use(express.json())
app.use("/api",router)
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server is working on "+PORT);
    connectDB()
})