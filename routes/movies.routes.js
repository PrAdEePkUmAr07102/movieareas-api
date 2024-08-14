import express from "express";

const router = express.Router();


// R-FOR READING A MOVIES
router.get("/",(req,res)=>{
    res.send("Get all movies");
});

//C-FOR CREATING AA MOVIES
router.post("/",(req,res)=>{
    res.send("Create all Movies");
});

//U-FOR UPDATE A MOVIE
router.put("/:id",(req,res)=>{
    res.send("Update all movies");
});

//D-FOR DELETE A MOVIE
router.delete("/:id",(req,res)=>{
    res.send("Delete all movie")
});


export default router;