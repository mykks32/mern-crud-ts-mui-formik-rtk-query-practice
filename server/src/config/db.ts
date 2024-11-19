import mongoose, { ConnectOptions } from "mongoose";

// Type the connect function as an asynchronous function that resolves to a connection object
const connectToDB = async (): Promise<void> => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);  // Type the options for mongoose connect method
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);  // Exit if the connection fails
    }
};

export default connectToDB;