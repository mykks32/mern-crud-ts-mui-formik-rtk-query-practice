import mongoose, { Document, Schema } from "mongoose";

// Define the Book interface to describe the shape of the document
export interface IBook extends Document {
    title: string;
    subtitle: string;
    author: string;
    isbn: string;
}

// Create the Book Schema
const BookSchema: Schema<IBook> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"],
            unique: true,
            trim: true,
            maxlength: [50, "Book title can't be more than 50 characters"],
        },
        subtitle: {
            type: String,
            required: [true, "Please add a subtitle"],
            trim: true,
            maxlength: [50, "Book subtitle can't be more than 50 characters"],
        },
        author: {
            type: String,
            required: [true, "Please add an author"],
            trim: true,
        },
        isbn: {
            type: String,
            required: [true, "Please add an ISBN number"],
            trim: true,
            maxlength: [13, "ISBN number can't be more than 13 characters"],
        },
    },
    {
        timestamps: true,
    }
);

// Export the Book model with the correct type
const Book = mongoose.model<IBook>("Book", BookSchema);

export default Book;