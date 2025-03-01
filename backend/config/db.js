import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE connection successfull`);
  } catch (error) {
    console.log(`DATABASE connection unsuccessfull:${error.message}`);
  }
};

export default connectDB;
