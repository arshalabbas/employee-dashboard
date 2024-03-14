import mongoose from "mongoose";

let isConnected: boolean = false;

const connectToDB = () => {
  if (isConnected) return;

  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("Missing MongoDB url in the env!!!");

  try {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
      isConnected = true;
      console.log("Connected to MongoDB ✅");
    });
  } catch (error: any) {
    console.log(`Error connecting to MongoDB. Error: ${error.message}`);
  }
};

export default connectToDB;
