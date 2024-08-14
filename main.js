import express from "express";
import movieRoutes from "./routes/movies.routes.js"
import connectDB from "./lib/db.js";


const app = express();
const PORT = 6969;


//CONNECT DB
connectDB();

app.get("/",(req,res)=>{
    res.json({ msg: "HELLO STUDENTS!"});
});


//CRUD FUNCTIONALITY OF MOVIES
app.use("/movies",movieRoutes);

app.listen(PORT, ()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});