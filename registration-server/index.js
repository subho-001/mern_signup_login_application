const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port=5000 || process.env.PORT;
const userRouter=require("./Routes/user");
app.use("/",userRouter);
app.get("/",(req,res)=>{
    res.send("hello world..!")
})
app.listen(port,()=>{
   mongoose.connect('mongodb://172.31.93.232:27017/devops-cloud-users',{useNewUrlParser: true},()=>{
//    mongoose.connect('mongodb://localhost:27017/devops-cloud-users',{useNewUrlParser: true},()=>{
    console.log("connected to database");
})
    console.log(`server is up at ${port}`);
})