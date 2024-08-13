import express from "express";

const app = express();
const PORT = 6969;


app.get("/",(req,res)=>{
    res.json({ msg: "HELLO STUDENTS!"});
});


app.listen(PORT, ()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});