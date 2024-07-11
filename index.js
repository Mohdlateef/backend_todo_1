const express=require("express")
require('dotenv').config()
const clc=require("cli-color")//used for having for my terminal
const mongoose = require("mongoose");
const { tomato } = require("color-name");

//file-imports


//constants
const app=express();
const port=process.env.PORT

//db connections

mongoose.connect(process.env.MOGO_URI)
.then(()=>{
    console.log(clc.yellowBright.bold("mongodb connected sucessfully"))
})
.catch((err)=>{
    console.log(clc.redBright(err))
})

// middleware
app.set("view engine","ejs");
  

//API'S
app.get('/',(req,res)=>{


    return res.send("this is home route")
})
//REGISTER PAGE
app.get('/register',(req,res)=>{
    return res.render("registerpage")
})
//lOGINPAGE
app.get("/login",(req,res)=>{
    return res.render("loginpage")
})



console.log(process.env.PORT);
app.listen(port,()=>{
    console.log(clc.yellowBright.bold("server is running on port:"))
    console.log(clc.yellowBright.underline(`http://localhost:${port}/`));

})