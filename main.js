import express from "express";

const app = express();
const PORT = 6969;


app.get("/",(req,res)=>{
    res.json({ msg: "HELLO STUDENTS!"});
});


//CRUD FUNCTIONALITY OF MOVIES

// R-FOR READING A MOVIES
app.get("/movies",()=>{});

//C-FOR CREATING AA MOVIES
app.post("/movies",()=>{});

//U-FOR UPDATE A MOVIE
app.put("/movies/:id",()=>{});

//D-FOR DELETE A MOVIE
app.delete("/movies/:id",()=>{});

app.listen(PORT, ()=>{
    console.log(`The Server Is Running at http://localhost:${PORT}`);
    
});