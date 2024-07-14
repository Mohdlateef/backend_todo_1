const express=require("express")

require('dotenv').config()
const clc=require("cli-color")//used for having for my terminal
const mongoose = require("mongoose");
const { tomato } = require("color-name");

//file-imports
const { userDataValidation } = require("./utils/authUtil");


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
  app.use(express.urlencoded({extended:true}))
  app.use(express.json) //body parsing in json format
//API'S
app.get('/',(req,res)=>{

    console.log("browser issue")
    return res.send("this is home route")
   
})
//REGISTER PAGE
app.get('/register',(req,res)=>{
    return res.render("registerpage")
})

app.post('/register', async (req,res)=>{
    const {name,email,username,password}=req.body;   
    //data validation
    try{
   await userDataValidation({email,username,name,password})}
   catch(error ){
    return res.status(200).json(error)
   }
    //email and username shoud be unique
    //encrypt the password
    // store with in db
    console.log(req.body);
    return res.send("user register sucessfully");
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