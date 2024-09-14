const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    task:[]

  });

  module.exports={
       UserSchema
  }