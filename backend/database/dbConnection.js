import mongoose from "mongoose";

/**
 * Handling db connection
 * @returns connection status
 */

export const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    });

    console.log(
      `\nMongoDB connection !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Db connection error: ${error}`);
    process.exit(1);
  }
};
