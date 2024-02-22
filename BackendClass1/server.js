//server initialte
const express = require('express');
const app = express();

-> //this is old method to usedd in req.body but now not is using  
const bodyParser = require("body-parser");
 app.use(bodyParser.json());

//middleware
app.use(express.json());


//activate the server port no 3000
 app.listen(3000,()=>{
    console.log("Sever started at port no 3000");
 });

 //Routes
app.get("/",(request,respond)=>{
   respond.send("To Kaise ho app sab sare ke sare");
})

//
app.post("/api/cars",(request ,respond)=>{
   const {name,brand} = request.body;
   console.log(name);
   console.log(brand);
   respond.send("Cards run successfully.");

})
//import mongoose for interface b/w mongodb and node js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> { console.log("Connection Successfull")})
.catch(()=>console.log("Recieved an error"));
