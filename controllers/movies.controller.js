export const MovieIndex = (req,res)=>{
    res.send("Get all movies");
}


export const MovieCreate = (req,res)=>{

    // CREATE MOVIE INFO(id,title,description)

    console.log(req.body);

    return res.json(req.body);
    
};


export const MovieUpdate = (req,res)=>{
    res.send("Update all movies");
}


export const MovieDelete = (req,res)=>{
    res.send("Delete all movie")
}

