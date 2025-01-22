import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const MONGODB = process.env.MONGODB

export const connectDB = async ()=>{
    mongoose.connect(MONGODB).then(()=>{
        console.log("DataBase Connected");
    }).catch((err)=>{
        console.log("error has occured in DB ",err);
    })
}