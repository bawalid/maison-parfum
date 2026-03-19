import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error(
      "MONGO_URI is missing. Create backend/.env from backend/.env.example and set your MongoDB connection string."
    );
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    throw new Error(`MongoDB connection error: ${error.message}`);
  }
};

export default connectDB;
