import Movie from "../models/movie.models.js";

export const MovieIndex = (req,res)=>{
    res.send("Get all movies");
}


export const MovieCreate = async (req,res)=>{

    // CREATE MOVIE INFO(id,title,description)
    console.log(req.body);

    //Validate your data.
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
        
    } catch (error) {
        return res.status(400).json({message: error.message});
        
    }

    
};

export const MovieUpdate = (req,res)=>{
    res.send("Update all movies");
}


export const MovieDelete = (req,res)=>{
    res.send("Delete all movie")
}

