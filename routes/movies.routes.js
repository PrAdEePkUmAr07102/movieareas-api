import express from "express";
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controller";

const router = express.Router();


// R-FOR READING A MOVIES
router.get("/",MovieIndex);

//C-FOR CREATING A MOVIES
router.post("/",MovieCreate);

//U-FOR UPDATE A MOVIE
router.put("/:id",MovieUpdate);

//D-FOR DELETE A MOVIE
router.delete("/:id",MovieDelete);


export default router;