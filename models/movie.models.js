import { model, Schema } from "mongoose";


// WRITE THE SCHEMA
const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description: {
        type:String,
        required:true,
    },
});


// Create your Model 

const Movie = model("Movie",schema);

export default Movie;