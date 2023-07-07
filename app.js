const express = require("express");
const app = express();
const mongoose =require("mongoose");

//middleware
app.use(express.json());

app.listen(3001 , ()=>{
     console.log("server is running on port 3001");
});

//congigue mongoose 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    },
    (err)=>{
        if(err){
            console.log(err);
        } else{
            console.log('connected to MongoDB');
        }
    }
),

module.exports = app;