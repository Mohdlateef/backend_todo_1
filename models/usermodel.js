//this is a schema


const mongoose=require("mongoose");
const Schema= mongoose.Schema

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    }
})



// const userModel=mongoose.model("user",userSchema);


// ** another way of improting things is like this **//
module.exports=mongoose.model("user",userSchema);