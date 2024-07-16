// lib/config/db.js
//Sai2626*
//mongodb+srv://saikumar:Sai2626*@cluster0.lkabqsx.mongodb.net/
import mongoose from "mongoose";

export const connectDb = async () => {
  
    await mongoose.connect('mongodb+srv://saikumar:Sai2626*@cluster0.lkabqsx.mongodb.net/next-todo')
    console.log("Db Connected");
    }
    
