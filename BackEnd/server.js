const express = require('express')
const app = express()
const PORT = 3000
const cors = require("cors")
const mongoose = require("mongoose");
const {UserSchema}= require('./Schemas');

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))

mongoose.connect('mongodb://localhost:27017/Todo').then(() => console.log('MongoDB connected'))
 .catch(err => console.error('MongoDB connection error:', err));


const User = mongoose.model('User', UserSchema);


  app.post("/update",async(req,res)=>{
    const userdata = req.body
    const newTask=userdata.todo
    try {
        const r = await User.findOneAndUpdate({username:userdata.username,password:userdata.password},{task:newTask})
        res.send({flag:true})
        
    } catch (error) {
        
        res.send({flag:false})
    }
    
  })




app.post("/signup",async(req,res)=>{
    const signupdata=req.body;
    try{
        await User.create({...signupdata,task:[]})
        res.send({flag:true})
    }catch(error){
        res.send({flag:false})
    }
    
})

app.post('/getdata',async(req,res)=>{
    const logindata=req.body;
    const r= await User.findOne(logindata)
    res.send(r); 
})

app.post('/login', async(req, res) => {
    
    const logindata=req.body;
    const r= await User.findOne(logindata)
    if(r){
        res.send(r)
    }else{
        res.send({flag:false})
    }
    
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})