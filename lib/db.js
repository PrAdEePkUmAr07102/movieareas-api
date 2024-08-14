import mongoose from "mongoose"


const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://pradeep07spk:2eZ7U419HwtGADzQ@cluster0.dmhd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" )
        console.log("MongoDB Connected...");

    } catch (error) {
        console.error(error.message);
        process.exit(1);
        
    }
};


export default connectDB;