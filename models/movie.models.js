import { model, Schema } from "mongoose";


// WRITE THE SCHEMA
const schema = new Schema({
    title: String,
    description: String,
});


// Create your Model 

const Movie = model("Movie",schema);

export default Movie;