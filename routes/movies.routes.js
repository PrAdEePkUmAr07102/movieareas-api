import express from "express";
import { MovieCreate, MovieDelete, MovieDetail, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

const router = express.Router();


// R-FOR READING A MOVIES
router.get("/",MovieIndex);


//SEE A MOVIE IN DETAIL 
router.get("/:id",MovieDetail);

//C-FOR CREATING A MOVIES
router.post("/",MovieCreate);

//U-FOR UPDATE A MOVIE
router.put("/:id",MovieUpdate);

//D-FOR DELETE A MOVIE
router.delete("/:id",MovieDelete);


export default router;