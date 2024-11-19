import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import bookRoutes from './routes/BookRoutes';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();
console.log(process.env.FRONTEND_URL);

// Use CORS to allow cross-origin requests
app.use(cors({
    origin: process.env.FRONTEND_URL, // Replace with the actual frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Book routes
app.use("/api/books", bookRoutes);

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;
console.log(`Using PORT: ${PORT}`);
console.log(`Using FRONTEND_URL: ${process.env.FRONTEND_URL}`);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});