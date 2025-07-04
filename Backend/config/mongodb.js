import mongoose from "mongoose";

const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" MongoDB connected");
    } catch (error) {
        console.error(" MongoDB connection failed:", error.message);
    }
};

export default mongoDB;